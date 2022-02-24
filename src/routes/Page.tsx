import React from 'react';
import 'styles/styles.css';
import { useLocation } from 'react-router-dom';
import InteriorsImage
  from '../images/interiors_page.png';

interface Props {

    heading: string
    bodyText: string

}

function Page(props: Props) {
  // eslint-disable-next-line no-console
  const location = useLocation();
  const threePage = location.pathname.includes('interiors');
  const { heading, bodyText } = props;

  if (threePage) {
    return (
      <div className="three-column-page">
        <div className="three-column-page-text">
          <h1>
            {heading}
          </h1>
          <p>
            {bodyText}
          </p>
        </div>
        <div className="three-column-page-image-container">
          <img
            src={InteriorsImage}
            style={{ width: '100%' }}
            alt="designer interiors"
          />
        </div>
      </div>
    );
  }
  return (

    <div className="main-page-content">
      {/* eslint-disable-next-line react/no-danger */}
      <h1>{heading}</h1>
      <p>{bodyText}</p>
    </div>
  );
}

export default Page;
