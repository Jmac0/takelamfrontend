/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import axios from 'axios';
import baseUrl from 'utils/urls';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBathtub,
  faHouse,
  faVectorSquare,
} from '@fortawesome/free-solid-svg-icons';
import { PropertyList, PrintIcon } from 'styles/PropertyPageStyles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSpring, animated } from 'react-spring';
import Loading from './Loader';
import logo from '../images/logo_blue.png';
import useToggleState from '../hooks/useToggleState';

import { Map, Marker } from './Map';
import { PrintPageBtn } from '../styles/Admin.Styles';

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
  floorPlan: string[];
  ownership: string;
}

interface Props {
  // eslint-disable-next-line react/require-default-props
/*
  handlePrint?: () => void;
*/
  // eslint-disable-next-line react/no-unused-prop-types
/*
  auth: {
    user?: any;
  };
*/
}

interface UrlParams {
  id?: string;
}
// eslint-disable-next-line import/prefer-default-export
function SingleProperty(props: Props) {
 // const { handlePrint } = props;
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

  const fadeIn = useSpring({
    cancel: loading,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
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

    const token = JSON.parse(localStorage.getItem('_Tuser') as string);
  useEffect(() => {
    // set path for admin property view
    let path = `${baseUrl}/properties`;
    // set path for client property view
    if (location.pathname.includes('view')) {
      // re-encode url param as browser ads slashes back in
      urlPram = encodeURIComponent(urlPram as string);
      path = `${baseUrl}/properties/client`;
    }

    axios
      .get(`${path}/${urlPram}`, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const {
          data: { property },
        } = response;

        const {
          data: {
            property: { cords },
          },
        } = response;
        setLoading(false);
        setMapCenter({ lat: cords[0], lng: cords[1] });
        setMapMarkerPosition({ lat: cords[0], lng: cords[1] });
        setCurrentProperty(() => property);
      }).catch(err => console.log(err));
  }, [urlPram]);

  /*
      setCenter({lat: currentProperty.cords[0], lng: currentProperty.cords[1] })
      setPosition({lat: currentProperty.cords[0], lng: currentProperty.cords[1] })
*/
  const gallery = cloudinary.galleryWidget({
    container: '#my-gallery',
    cloudName: 'takelam',
    loaderProps: {
      style: 'circle',
    },
    zoomProps: {
      type: 'popup',
      steps: 3,
      stepLimit: true,
      level: 1.3, // each step zooms in another 130%
    },
    carouselLocation: 'bottom',
    aspectRatio: '16:9',
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

  // if (currentProperty.title) gallery.render();
  let floorPlans: JSX.Element[] = [];
  // render floor plans
  if (currentProperty.floorPlan) {
    floorPlans = currentProperty.floorPlan.map((el, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <a key={i} href={currentProperty.floorPlan[i]} target="blank">
        <img
          style={{ border: '1px solid black', marginRight: '5px' }}
          alt="thumb"
          width="150px"
          height="100px"
          src={currentProperty.floorPlan[i]}
        />
      </a>
    ));
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10rem'}} className="page"><Loading loading={loading} /></div>
      ) : (
        <animated.div style={fadeIn} className="page" >
          <div className="print-logo">
            <img src={logo} width="100" height="86" alt="" />
            <p>
              Some contact info <br />
              01223 1234-4567
            </p>
          </div>

          <div className="print-page-btn hidden-on-print">
            <PrintPageBtn
            //  onClick={handlePrint}
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
              }}
            >
              <PrintIcon type="button" />
              Print
            </PrintPageBtn>
          </div>


{/*
          <div id="my-gallery" />
*/}


          <div className="hidden-on-print">
             conditionally render floor plans
            {floorPlans.length > 0 ? (
              <div>
                <h4>Floor Plans</h4> {floorPlans}
              </div>
            ) : (
              ''
            )}
          </div>

          <PropertyList>
            <div>{currentProperty.location}</div>
            <div>€{currentProperty.price}</div>
            <div>
              <FontAwesomeIcon icon={faBed as IconProp} className="icon" />
              Bedrooms: {currentProperty.bedrooms}
            </div>
            <div>
              <FontAwesomeIcon icon={faBathtub as IconProp} className="icon" />
              Bathrooms: {currentProperty.bathrooms}
            </div>

            <div>
              <FontAwesomeIcon icon={faHouse as IconProp} className="icon" />
              Build Size: {currentProperty.buildSize}
              ms
            </div>

            <div>
              <FontAwesomeIcon
                icon={faVectorSquare as IconProp}
                className="icon"
              />
              Plot Size: {currentProperty.plotSize}
            </div>

             conditionally render ownership

            {currentProperty.ownership && (
              <div style={{ marginTop: '10px' }}>
                <h4>Ownership:</h4>
                <p> {currentProperty.ownership}</p>
              </div>
            )}
            <div className="print-page-break">
              <h4>Property Description:</h4>

              <p
                dangerouslySetInnerHTML={{
                  __html: currentProperty.description,
                }}
              />
            </div>
          </PropertyList>
          <div className="hidden-on-print">
            <Wrapper apiKey={API}>
              <Map center={mapCenter} zoom={12}>
                <Marker position={mapMarkerPosition} />
              </Map>
            </Wrapper>
          </div>
        </animated.div>
      )}
    </>
  );
  /// /////////////////// Map ///////////////////////
}

// eslint-disable-next-line import/prefer-default-export
export  {SingleProperty}