import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PropertyList } from 'styles/PropertyPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import 'styles/styles.css';
import { icon } from '@fortawesome/fontawesome-svg-core';

declare const cloudinary: any;
interface Property {
  title: string;
  price: number;
  bedrooms: number;
}
function SingleProperty() {
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
    zoom: false,
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
  return (
    <div style={{ gridArea: 'main', zIndex: '1' }}>
      <div
        style={{
          visibility: `${currentProperty ? 'visible' : 'hidden'}`,
        }}
        id="my-gallery"
      />

      <PropertyList>
        <li>
          Price $
          {currentProperty.price}
        </li>
        <li>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms:
          {currentProperty.bedrooms}
        </li>
        <li>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms:
          {currentProperty.bedrooms}
        </li>

        <li>
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms:
          {currentProperty.bedrooms}
        </li>
      </PropertyList>
    </div>
  );
}

export default SingleProperty;
