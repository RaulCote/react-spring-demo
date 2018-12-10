import React from 'react';
import { useSpring, animated } from 'react-spring';

const HookedComponent = () => {
  const [props] = useSpring({
    opacity: 1,
    color: 'white',
    from: { opacity: 0 },
    delay: 50
  })
  return <animated.div style={props}>
          <h1>Raúl Cote Utor</h1>
         </animated.div>
}

export default HookedComponent; 
