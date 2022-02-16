import React from 'react';
import 'styles/styles.css';
import logo from 'images/landing_logo.png';

function Home() {
  return (
    <div className="home-component">
      <img style={{ maxWidth: '80%', marginTop: '100px' }} src={logo} alt="logo" />
    </div>
  );
}

export default Home;
