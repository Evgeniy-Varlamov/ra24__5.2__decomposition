/**
 * Компонент показывает данные о погоде
 */
import React from 'react';

export default function Weather() {
  const weather = {
    imgsrc: '',
    imgalt: 'малооблачно',
    now: '+12',
    night: '+9',
    morning: '+16',
  };

  return (
    <>
      <div className='temperature'>
        <div>
          <img className='weather-image' src={weather.imgsrc} alt={weather.imgalt} title={weather.imgalt} />
          {weather.now}
        </div>
        <div className='weather-future'>
          <span>Ночью {weather.night}</span>
          <span>Утром {weather.morning}</span>
        </div>
      </div>
    </>
  );
}
