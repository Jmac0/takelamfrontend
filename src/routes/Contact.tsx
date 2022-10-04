import React from 'react';
import 'styles/styles.css';
import { ContactFormButton } from '../styles/Admin.Styles';
import {Atag} from '../styles/Container.styles';

interface Props {
  path: any
}

function Contact({path}: Props) {

  return (
    <div style={{ marginBottom:`${path.includes('contact') ? '-2rem' : ''}`}}
         className={ `${path.includes('contact') ? "main-page-content" : ""}`}>

      <h1>
		  Contact us
      </h1>
      <form
        name="takelam-contact"
        method="POST"
        data-netlify="true"
        action="/success"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-evenly',
        }}
      >
        {/* hidden input is for Netlify form */}
        <input type="hidden" name="form-name" value="takelam-contact" />
        <div  className="inputs-divs">
          <label className="form-label" htmlFor="name">
            Name
          </label>
            <input className="form-input" required id="name" type="text" name="name" />
        </div>

        <div className="inputs-divs">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
            <input
              required
              className="form-input"
              id="email"
              type="email"
              name="email"
            />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'start',
          }}
        >
          <textarea
            className="text-area"
            id="message"
            name="message"
            rows={4}
            cols={30}
            placeholder="Message"
          />
        </div>
          <ContactFormButton type="submit" className="submit-button">
            Submit
          </ContactFormButton>
      </form>
    </div>
  );
}

export default Contact;
