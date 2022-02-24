import React from 'react';
import 'styles/styles.css';
import logo from 'images/landing_logo.png';

function LandingPage() {
  return (
    <div className="home-component">
      <img
        style={{
          maxWidth: '70%', marginTop: '100px', marginBottom: '22rem',
        }}
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default LandingPage;
