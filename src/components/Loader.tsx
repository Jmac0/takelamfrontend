import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Circle2} from '../styles/LoadingSpinnerStyles';
import colors from '../styles/colors';

interface Props {
  loading: boolean;
}

function Loader({ loading }: Props) {
  // const props = useSpring({ to: { opacity: 0 }, from: { opacity: 1 } })

  // Hooks used to fade in/out the loader or the button contents

  const fadeOutProps = useSpring({ opacity: loading ? 1 : 0 });
  //  const fadeInProps = useSpring({ opacity: loading ? 0 : 1 });

  return (
    <animated.div style={{position: 'relative', width:'200px',height: '200px', ...fadeOutProps}}>
      <div style={{position:'absolute', top: '45%', left: '25%'}}><h1 style={{margin: '0', padding:'0'}}>LOADING</h1></div>
      <Circle2 color={colors.tan}  bottom={0} left={9} right={0} top={10} />
      <Circle2 color={colors.tan}  bottom={0} left={0} right={0} top={10}/>
      <Circle2 color={colors.tan}  bottom={0} left={0} right={9} top={5}/>
      <Circle2 color={colors.tan}  bottom={0} left={0} right={19} top={17}/>
      <Circle2 color={colors.tan}  bottom={0} left={0} right={7} top={9}/>
      <Circle2 color={colors.tan}  bottom={0} left={0} right={6} top={3}/>
      <Circle2 color={colors.tan}  bottom={0} left={0} right={7} top={3}/>
      <Circle2 color={colors.tan}  bottom={3} left={0} right={0} top={3}/>
    </animated.div>
  );
}

export default Loader;
