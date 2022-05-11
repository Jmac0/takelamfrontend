import React from 'react';

import { useSpring, animated } from 'react-spring';
import { Button, Loader } from '../styles/Admin.Styles';

interface Props {
  loading: boolean;
  children?: string;
  completedActionText?: string;
  action?: 'submit' | 'button'
}



function ButtonLoader({ loading, children, completedActionText }: Props) {
  /* showLoader is used to stay in the "isLoading state" a bit longer to avoid loading flashes
     if the loading state is too short. */
  const [showLoader, setShowLoader] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (loading) {
      setShowLoader(true);
    }

    // Show loader a bit longer to avoid loading flash
	  if (!loading && showLoader) {

		  const timeout = setTimeout(() => {
		  setShowLoader(false)
		  }, 2000)

		  const savedTimer = setTimeout(() => {
			  setSaved(true);
		  }, 1000)

		  setSaved(false);

		  return () => {
			  clearTimeout(savedTimer);
			  clearTimeout(timeout);
		  };

    }
  }, [loading, showLoader]);

  /* Capture the dimensions of the button before the loading happens
     so it doesn’t change size.
     These hooks can be put in a seprate file. */
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  // Hooks used to fade in/out the loader or the button contents
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

  return (
    <Button
      type="submit"
      ref={ref}
      style={
        showLoader
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
    >
      {showLoader ? (
        <animated.span style={fadeOutProps}>
			{ saved ? completedActionText : <Loader /> }
        </animated.span>
      ) : (
        <animated.span style={fadeInProps}>{children}</animated.span>
      )}

    </Button>
  );
}
ButtonLoader.defaultProps= {children: '', completedActionText:  'SAVED', action: 'submit'}

export default ButtonLoader
