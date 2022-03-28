import React from 'react';import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

const CircleTime = ({label,number}) => {
  return(
    <div className='text-center mx-2 flex flex-col justify-center items-center'>
      <div className=' bg-secondary w-12 h-12 flex items-center justify-center rounded-full text-light font-medium text-xl'>{number}</div>
      <span className=' text-xs inline-block mt-2 uppercase'>{label}</span>
    </div>
  )
}
// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='flex justify-center mt-4'>
        <CircleTime
        label="Dias"
        number={days}
        />
        <CircleTime
        label="Horas"
        number={hours}
        />
        <CircleTime
        label="Minutos"
        number={minutes}
        />
        <CircleTime
        label="Seg."
        number={seconds}
        />

      </div>
    );
  }
};

console.log()

export default function Count(params) {
  return(
    <Countdown date={'2022-04-30T00:00:00'} renderer={renderer} />
  )
};
