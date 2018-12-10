import React from 'react';
import { useSpring, animated } from 'react-spring';

const HookedSecondIn = () => {
  const [props] = useSpring({
    opacity: 1,
    color: 'white',
    from: { opacity: 0 },
    delay: 1000
  })
  return <animated.div style={props}><h5>is...</h5></animated.div>
}

export default HookedSecondIn; 