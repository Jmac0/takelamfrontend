import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <h4>Nav</h4>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="interiors">Interiors</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}
