import React from 'react';
import { Spring, config } from 'react-spring';

const counter = () => (
  <Spring 
    from={{ number: 0 }} 
    to={{ number: 10 }} 
    delay= '500'
    config = { config.wobbly }
    >
    {props => <div>{props.number.toFixed()}</div>}
  </Spring> 
)

export default counter; 