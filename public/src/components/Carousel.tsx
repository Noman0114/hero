'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

type CarouselItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

interface CarouselProps {
  items: CarouselItem[];
}

// Define types for arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Define interface for slider element with slickGoTo method
interface SlickSliderElement extends HTMLElement {
  slickGoTo: (slideIndex: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const PrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick} 
        className="absolute top-[535px] left-[150px] transform  text-white p-2 opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick} 
        className="absolute  top-[535px] left-[310px] transform  text-white p-2 opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    );
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full ${
          currentSlide === i ? 'bg-white' : 'bg-white/50'
        }`}
      />
    ),
  };

  return (
    <>
    <div className="  flex flex-col md:ml-62 ml-0 ">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={150}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom indicators */}
      <div className="carousel-indicators mt-4">
        {items.map((_, index) => (
          <div 
            key={index} 
            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => {
              const slider = document.querySelector('.slick-slider') as HTMLElement;
              if (slider && 'slickGoTo' in slider) {
                (slider as SlickSliderElement).slickGoTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
    <div className=' max-w-lg h-28 mt-18 flex flex-row gap-1 mx-auto justify-center items-center ml-[300px]'>
      <video src="/images/2.mp4" autoPlay muted loop className='   h-full object-cover'></video>
      <div className='flex flex-col  w-[200px]'>
        <div className='font-semibold text-white'>SEE OUR WORK</div>
        <div className='font-semibold text-2xl text-white'>IN ACTION</div>
        <div className=' text-white'>1 MINUTE</div>
      </div>
    </div>
    </>

  );
};

export default Carousel; 