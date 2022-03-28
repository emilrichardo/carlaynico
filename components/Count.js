import React from 'react';import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;


// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} - {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

console.log()

export default function Count(params) {
  return(
    <Countdown date={'2022-04-30T00:00:00'} renderer={renderer} />
  )
};
