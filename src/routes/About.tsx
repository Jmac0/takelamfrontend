import React from 'react';
import 'styles/styles.css';
import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="main-page-content">
      <h1>
        <Outlet />
        Luxury Property Finders & Developers, based between Quinta do Lago &
        Surrey
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
