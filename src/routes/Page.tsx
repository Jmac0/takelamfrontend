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

  // Different layout for three column pages
  if (threePage) {
    return (
      <div className="three-column-page">
        <div className="three-column-page-text">
          <h1>
            {heading}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: bodyText }} />

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
  // stangard page layout
    <div className="main-page-content">
      {/* eslint-disable-next-line react/no-danger */}
      <h1>{heading}</h1>
      <p dangerouslySetInnerHTML={{ __html: bodyText }} />
    </div>
  );
}

export default Page;
