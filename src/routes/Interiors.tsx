import React from 'react';
import InteriorsImage from 'images/interiors_page.png';

function Interiors() {
  return (
    <div
      style={{
        justifyContent: 'space-between',
        marginTop: '10rem',
        display: 'flex',
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '2',
        gridColumnEnd: '4',
        flexDirection: 'row',
        padding: '1rem 0',
        textAlign: 'left',
      }}
    >
      <div style={{ width: '50%' }}>
        <h1>
          INTERIORS
          {' '}
          <br />
          We place a great deal of emphasis on meeting our clients’ requirement
          and finding the best possible fit for you. The feeling and character
          of the property are vital components in a truly successful deal.
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
      <div
        style={{
          position: 'relative',
          top: '-15%',
          width: '40%',
          marginRight: '5%',
        }}
      >
        <img
          src={InteriorsImage}
          style={{
            overflow: 'hidden',
            height: '100%',
          }}
          alt="designer interior"
        />
      </div>
    </div>
  );
}

export default Interiors;
