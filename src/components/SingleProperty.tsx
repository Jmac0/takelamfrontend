/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { PropertyList } from 'styles/PropertyPageStyles';
import 'styles/styles.css';

import { Map, Marker } from './Map';

declare const cloudinary: any;
interface Property {
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  buildSize: string;
  plotSize: string;
  description: string;
  ownership: string;
}
function SingleProperty() {
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 51.32156694051315,
    lng: -0.20484525142481128,
  });
  const [position, setPosition] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    setPosition({

      lat: 51.29555368260512,
      lng: -0.3214003112747932,

    });
  }, []);

  // get current property from url params
  const propertyUrlId = useParams();
  // @ts-ignore
  const [pram, setId] = useState<{ id: string }>(propertyUrlId.id);
  // @ts-ignore
  const [currentProperty, setCurrentProperty] = useState<Property>({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/properties/${pram}`)
      .then((response) => {
        const {
          data: { property },
        } = response;
        setCurrentProperty(() => property);
        console.log(pram);
      });
  }, [pram]);

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
  // @ts-ignore
  return (
    <div style={{
      width: '98%', margin: '0 auto', gridArea: 'main', zIndex: '1',
    }}
    >
      <div
        style={{
          visibility: `${currentProperty ? 'visible' : 'hidden'}`,
        }}
        id="my-gallery"
      />

      <PropertyList>

        <div>
          {currentProperty.location}
        </div>
        <div>
          Price $
          {currentProperty.price}
        </div>
        <div>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms:
          {' '}
          {currentProperty.bedrooms}
        </div>
        <div>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bathrooms:
          {' '}
          {currentProperty.bedrooms}
        </div>

        <div>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Build Size:
          {' '}
          {currentProperty.buildSize}
          ms
        </div>

        <div>
          <FontAwesomeIcon icon={faBed} className="icon" />
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
      <Wrapper apiKey="AIzaSyAmvluV35QOlhwlVPjAbJp8JPNEHzTXzPI">
        <Map center={center} zoom={10}>
          <Marker position={position} />
        </Map>
      </Wrapper>
    </div>
  );
  /// /////////////////// Map ///////////////////////
}

export default SingleProperty;
