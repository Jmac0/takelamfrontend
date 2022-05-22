import React from 'react';
import 'styles/styles.css';
import { ContactFormButton } from '../styles/Admin.Styles';


interface Props {
  path: string;
}

function Contact({path}: Props) {

  return (
    <div style={{ marginBottom:`${path.includes('contact') ? '-2rem' : ''}`}}
         className={ `${path.includes('contact') ? "main-page-content" : ""}`}>
      <h1>Tel: 12345 67891</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        cumque cupiditate, debitis delectus{' '}
      </p>
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
        <input type="hidden" name="form-name" value="takelam-contact" />
        <div  className="inputs-divs">
          <label className="form-label" htmlFor="name">
            Name
          </label>
            <input className="form-input" id="name" type="text" name="name" />
        </div>

        <div className="inputs-divs">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
            <input
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
          <ContactFormButton type="submit" className="submit-button">
            Submit
          </ContactFormButton>
        </div>
      </form>
    </div>
  );
}

export default Contact;
