/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import * as React from 'react';
import { createCustomEqual } from 'fast-equals';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  isLatLngLiteral,
} from '@googlemaps/typescript-guards';

declare const google: any;

interface MapProps extends google.maps.MapOptions {
    // eslint-disable-next-line react/require-default-props
    style?: { [key: string]: string };
    // eslint-disable-next-line react/require-default-props
    onClick?: (e: google.maps.MapMouseEvent) => void;
    // eslint-disable-next-line react/require-default-props
    onIdle?: (map: google.maps.Map) => void;

}
// eslint-disable-next-line react/function-component-definition

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a)
            || a instanceof google.maps.LatLng
            || isLatLngLiteral(b)
            || b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  },
);

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  dependencies: any[],
) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

// eslint-disable-next-line react/function-component-definition
const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  return (
    <>
      <div style={{ width: '100%', height: '300px' }} ref={ref} />
      {/* eslint-disable-next-line consistent-return */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

// eslint-disable-next-line react/function-component-definition
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

// eslint-disable-next-line import/prefer-default-export
export { Map, Marker };
