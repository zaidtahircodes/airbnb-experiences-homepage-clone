import react from 'react';
import '../App.css';
import Hero_img from '../img/Group 77.png';
import wave from '../img/wave.png';

export default function Hero() {
    return (
        <section className='flex flex-col items-center'>
          <div>
          <img className='max-w-full h-auto' src={Hero_img} alt='hero'></img>
          </div>
          <div>
          <h1 className='font-bold text-4xl'> Online Experience</h1>
          <p className='font-light text-xl'>Join unique interactive activities led by one-of-a-kind hosts all without leaving home</p>
          </div>
        </section>
    )

}