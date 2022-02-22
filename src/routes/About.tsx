import React from 'react';
import 'styles/styles.css';

interface Props {
// eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
aboutTitle?: {}

}
// eslint-disable-next-line react/prop-types
// @ts-ignore
// eslint-disable-next-line react/prop-types
function About({ aboutTitle }: Props) {
  return (
    <div className="main-page-content">
      <h1>
        {aboutTitle}
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        architecto exercitationem, iure laborum modi nihil provident sapiente
        tempore unde. A aspernatur, facere necessitatibus odit praesentium
        reiciendis repudiandae saepe sequi tenetur.
      </p>
    </div>
  );
}

export default About;
