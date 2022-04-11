import React from 'react';
import 'styles/styles.css';
import WYSIWYG from "../components/WYSIWYG";

function Contact() {
  const email: any = '';

  return (
    <div style={{ marginBottom: '-2rem' }} className="main-page-content">
      <h1>Tel: 12345 67891</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        cumque cupiditate, debitis delectus
        {' '}
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-evenly',
        }}
      >
        <div>
          <label className="form-label" htmlFor="Fname">
            First Name
            <input
              className="form-input"
              id="Fname"
              type="text"
              value={email}
              onChange={email}
            />
          </label>
        </div>

        <div>
          <label className="form-label" htmlFor="Fname">
            Last Name
            <input
              className="form-input"
              id="Fname"
              type="text"
              value={email}
              onChange={email}
            />
          </label>
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
            id="w3review"
            name="w3review"
            rows={4}
            cols={30}
            placeholder="Message"
          />
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
