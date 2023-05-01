import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className='App'>
      <div className='slider'>
        <input type='checkbox' id='checkbox' onChange={() => theme === 'light' ? setTheme('dark') : setTheme('light')}></input>
        <label className='slider__circle' htmlFor='checkbox'>
          <div className='slider__circle-crater crater-1'></div>
          <div className='slider__circle-crater crater-2'></div>
          <div className='slider__circle-crater crater-3'></div>
        </label>

        <div className='slider__background'>
          <div className='slider__background__gradient'>
            <div className={`slider__background__gradient-layer layer-1`}></div>
            <div className={`slider__background__gradient-layer layer-2`}></div>
            <div className={`slider__background__gradient-layer layer-3`}></div>
          </div>
          <div className='slider__background__clouds'>
            <div className='slider__background__clouds-cloud cloud-1'>
              <div className='cloud-1__circle circle-1'></div>
              <div className='cloud-1__circle circle-2'></div>
              <div className='cloud-1__circle circle-3'></div>
              <div className='cloud-1__circle circle-4'></div>
              <div className='cloud-1__circle circle-5'></div>
              <div className='cloud-1__circle circle-6'></div>
              <div className='cloud-1__circle circle-7'></div>
            </div>
            <div className='slider__background__clouds-cloud cloud-2'>
              <div className='cloud-2__circle circle-8'></div>
              <div className='cloud-2__circle circle-9'></div>
              <div className='cloud-2__circle circle-10'></div>
              <div className='cloud-2__circle circle-11'></div>
              <div className='cloud-2__circle circle-12'></div>
              <div className='cloud-2__circle circle-13'></div>
              <div className='cloud-2__circle circle-14'></div>
            </div>
          </div>
          <div className='slider__background__stars'>
            <div className='slider__background__stars-star star-1'></div>
            <div className='slider__background__stars-star star-2'></div>
            <div className='slider__background__stars-star star-3'></div>
            <div className='slider__background__stars-star star-4'></div>
            <div className='slider__background__stars-star star-5'></div>
            <div className='slider__background__stars-star star-6'></div>
            <div className='slider__background__stars-star star-7'></div>
            <div className='slider__background__stars-star star-8'></div>
            <div className='slider__background__stars-star star-9'></div>
            <div className='slider__background__stars-star star-10'></div>
            <div className='slider__background__stars-star star-11'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
