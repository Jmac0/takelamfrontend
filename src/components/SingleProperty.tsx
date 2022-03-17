/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faBathtub, faHouse, faVectorSquare,
} from '@fortawesome/free-solid-svg-icons';
import { PropertyList } from 'styles/PropertyPageStyles';
import useToggleState from '../hooks/useToggleState';
import 'styles/styles.css';

import { Map, Marker } from './Map';

declare const cloudinary: any;
interface Property {
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  buildSize: string;
  plotSize: string;
  description: string;
  ownership: string;
}
function SingleProperty() {
  const API = process.env.REACT_APP_GOOGLE_API as string;
  // Get current property from url params
  const propertyUrlId = useParams();
  // Property id from url param object
  const [urlPram, setUrlParam] = useState(propertyUrlId.id);
  const [loading, setLoading] = useToggleState(true);
  // State to hold current property data
  // @ts-ignore
  const [currentProperty, setCurrentProperty] = useState<Property>({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/properties/${urlPram}`)
      .then((response) => {
        const {
          data: { property },
        } = response;
        setCurrentProperty(() => property);
        setLoading(() => false);
      });
  }, [urlPram]);

  // Initial center of google map
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 51.32156694051315,
    lng: -0.20484525142481128,
  });
    // Marker position on map
  const [position, setPosition] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
    // set map marker position on load
  useEffect(() => {
    setPosition({

      lat: 51.29555368260512,
      lng: -0.3214003112747932,

    });
  }, []);

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
      { tag: `${currentProperty.title}` },
    ],
  });

  if (currentProperty.title) gallery.render();

  // cloudinary gallery
  // @ts-ignorem

  // @ts-ignore
  return (loading
    ? (
      <div style={{
        color: 'white',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: '1',
      }}
      >
        <h1>LOADINGs</h1>
      </div>
    ) : (
      <div style={{
        width: '98%',
        margin: '0 auto',
        gridArea: 'main',
        zIndex: '1',
      }}
      >
        <div id="my-gallery" style={{ height: '400px', marginBottom: '15rem' }} />

        <PropertyList>

          <div>
            {currentProperty.location}
          </div>
          <div>
            Price $
            {currentProperty.price}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBed}
              className="icon"
            />
            Bedrooms:
            {' '}
            {currentProperty.bedrooms}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBathtub}
              className="icon"
            />
            Bathrooms:
            {' '}
            {currentProperty.bathrooms}
          </div>

          <div>
            <FontAwesomeIcon
              icon={faHouse}
              className="icon"
            />
            Build Size:
            {' '}
            {currentProperty.buildSize}
            ms
          </div>

          <div>
            <FontAwesomeIcon
              icon={faVectorSquare}
              className="icon"
            />
            Plot Size:
            {' '}
            {currentProperty.plotSize}
          </div>
          {/*
             conditionally render ownership
             */}
          {currentProperty.ownership && (
          <div>
            <h4>Ownership:</h4>
            <p>
              {' '}
              {currentProperty.ownership}
            </p>
          </div>
          )}
          <div>
            <h4>Property Description:</h4>
            {' '}
            <p>
              {' '}
              {currentProperty.description}
            </p>
          </div>
        </PropertyList>
        <Wrapper
          apiKey={API}
        >
          <Map center={center} zoom={10}>
            <Marker position={position} />
          </Map>
        </Wrapper>
      </div>
    )
  );
  /// /////////////////// Map ///////////////////////
}

export default SingleProperty;
