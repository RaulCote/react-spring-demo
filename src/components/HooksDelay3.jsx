import React from 'react';
import { useSpring, animated } from 'react-spring';

const HookedThirdIn = () => {
  const [props] = useSpring({
    opacity: 1,
    color: 'white',
    from: { opacity: 0 },
    delay: 1500
  })
  return <animated.div style={props}>
          <h2 className='delay3-color'>Practicing with Hooks and React-Spring!</h2>
         </animated.div>
}

export default HookedThirdIn; 