import React from 'react';import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import Button from './Button';
// Random component
const Completionist = () => <div>
  <h2 className='text-2xl'>¡El grán día llegó! recuerda compartir tus fotos en el album</h2>
  <a className="block mt-8" target="_blank" rel="noreferrer" href="https://photos.app.goo.gl/pQcP6X6RCqAco8x48">
            <Button>Compartir fotos en album</Button>
          </a>
</div>;

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
      <div>
         <h4 className=" font-medium">Faltan</h4>
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
      </div>

    );
  }
};

console.log()

export default function Count(params) {
  return(
    <Countdown date={'2022-04-30T00:21:00'} renderer={renderer} />
  )
};
