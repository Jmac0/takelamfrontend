/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import axios from 'axios';
import baseUrl from 'utils/urls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBathtub,
  faHouse,
  faVectorSquare,
} from '@fortawesome/free-solid-svg-icons';
import { PropertyList } from 'styles/PropertyPageStyles';
import useToggleState from '../hooks/useToggleState';
import 'styles/styles.css';

import { Map, Marker } from './Map';

declare const cloudinary: any;
interface Property {
  title: string;
  cords: number[];
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  buildSize: string;
  plotSize: string;
  description: string;
  ownership: string;
}

interface UrlParams {
  id?: string;
}
function SingleProperty() {
  const API = process.env.REACT_APP_GOOGLE_API as string;
  // Get current property from url params
  const propertyUrlId = useParams();
  const location = useLocation();

  // Property id from url param object
  let [urlPram] = useState(propertyUrlId.id);
  const [loading, setLoading] = useToggleState(true);
  // State to hold current property data
  // @ts-ignore
  const [currentProperty, setCurrentProperty] = useState<Property>({});

  // Initial center of google map
  const [mapCenter, setMapCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 51.32156694051315,
    lng: -0.20484525142481128,
  });
  // Marker position on map
  const [mapMarkerPosition, setMapMarkerPosition] =
    React.useState<google.maps.LatLngLiteral>({
      lat: 0,
      lng: 0,
    });


  useEffect(() => {
    // set path for admin property view
    let path = `${baseUrl}/properties`;
    // set path for client property view
    if (location.pathname.includes('view')) {
      // re-encode url param as browser ads slashes back in
      urlPram = encodeURIComponent(urlPram as string);
      path = `${baseUrl}/properties/client`;
    }

    axios.get(`${path}/${urlPram}`).then((response) => {
      const {
        data: { property },
      } = response;

      const {
        data: {
          property: { cords },
        },
      } = response;
      setMapCenter({ lat: cords[0], lng: cords[1] });
      setMapMarkerPosition({ lat: cords[0], lng: cords[1] });
      setCurrentProperty(() => property);
      setLoading(() => false);
    });
  }, [urlPram]);

  /*
      setCenter({lat: currentProperty.cords[0], lng: currentProperty.cords[1] })
      setPosition({lat: currentProperty.cords[0], lng: currentProperty.cords[1] })
*/
  const gallery = cloudinary.galleryWidget({
    container: '#my-gallery',
    cloudName: 'takelam',
    zoomProps: {
      type: 'popup',
      steps: 3,
      stepLimit: true,
      level: 1.3, // each step zooms in another 130%
    },
    carouselLocation: 'bottom',
    navigationButtonProps: {
      shape: 'round',
      color: '#d0c6b7',
      size: 40,
      iconColor: '#FFFFFF',
    },
    mediaAssets: [
      // @ts-ignore
      { tag: `${currentProperty.tag}` },
    ],
  });

  if (currentProperty.title) gallery.render();

  return loading ? (
    <div
      style={{
        color: 'white',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: '1',
      }}
    >
      <h1>LOADING</h1>
    </div>
  ) : (
    <div
      style={{
        width: '98%',
        margin: '0 auto',
        gridArea: 'main',
        zIndex: '1',
      }}
    >
      <div id="my-gallery" />

      <PropertyList>
        <div>{currentProperty.location}</div>
        <div>Price ${currentProperty.price}</div>
        <div>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms: {currentProperty.bedrooms}
        </div>
        <div>
          <FontAwesomeIcon icon={faBathtub} className="icon" />
          Bathrooms: {currentProperty.bathrooms}
        </div>

        <div>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          Build Size: {currentProperty.buildSize}
          ms
        </div>

        <div>
          <FontAwesomeIcon icon={faVectorSquare} className="icon" />
          Plot Size: {currentProperty.plotSize}
        </div>
        {/*
             conditionally render ownership
             */}
        {currentProperty.ownership && (
          <div>
            <h4>Ownership:</h4>
            <p> {currentProperty.ownership}</p>
          </div>
        )}
        <div>
          <h4>Property Description:</h4>

			<p dangerouslySetInnerHTML={{ __html:  currentProperty.description }} />

        </div>
      </PropertyList>
      <Wrapper apiKey={API}>
        <Map center={mapCenter} zoom={12}>
          <Marker position={mapMarkerPosition} />
        </Map>
      </Wrapper>
    </div>
  );
  /// /////////////////// Map ///////////////////////
}

export default SingleProperty;
