import React from 'react';
import { useSpring, animated } from 'react-spring';

function NotFound() {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
  }); // Initial center of google map
  return (
    <animated.div
      style={{ alignSelf: 'center', justifySelf: 'center', gridArea: 'main', ...fadeIn}}
    >
      <h1>404 Not found on this server </h1>
      <p>
        Please use the menu to find the page you need or contact us for help{' '}
      </p>
    </animated.div>
  );
}

export default NotFound;
