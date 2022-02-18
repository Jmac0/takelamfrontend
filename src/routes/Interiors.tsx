import React from 'react';
import InteriorsImage from 'images/interiors_page.png';
import 'styles/styles.css';

function Interiors() {
  return (
    <div className="three-column-page">
      <div className="three-column-page-text">
        <h1>
          Interior Design Services by Takelam.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          architecto exercitationem, iure laborum modi nihil provident sapiente
          tempore unde. A aspernatur, facere necessitatibus odit praesentium
          reiciendis repudiandae saepe sequi tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          architecto exercitationem, iure laborum modi nihil provident sapiente
          tempore unde. A aspernatur, facere necessitatibus odit praesentium
          reiciendis repudiandae saepe sequi tenetur. architecto exercitationem,
          iure laborum modi nihil provident sapiente tempore unde. A aspernatur,
          facere necessitatibus odit praesentium reiciendis repudiandae saepe
          sequi tenetur.
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

export default Interiors;
