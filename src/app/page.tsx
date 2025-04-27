'use client';

import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const carouselItems = [
    {
      id: 1,
      image: '/images/1.png',
      title: 'eCommerce Website Showcase',
      description: 'Responsive eCommerce website with modern UI',
    },
    {
      id: 2,
      image: '/images/1.png',
      title: 'Mobile Shopping Experience',
      description: 'Optimized mobile shopping interface',
    },
    {
      id: 3,
      image: '/images/1.png',
      title: 'Dashboard Analytics',
      description: 'Comprehensive dashboard for business insights',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section relative pt-16">
        <div className="container mx-auto px-4 py-16 md:py-20">
          {/* //icon from lucide react Home */}

          {/* Breadcrumb */}
          <div className="breadcrumb gap-1  flex items-center mb-8">
            <Link href="/" className='  font-semibold'>Home</Link>
            <span className="breadcrumb-arrow  font-semibold">›</span>
            <Link href="/development-services " className=" font-semibold">Development Services</Link>
            <span className="breadcrumb-arrow  font-semibold">›</span>
            <span className=' font-semibold'>eCommerce Development</span>
          </div>
          
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-6xl md:text-6xl font-extrabold leading-tight mb-6">
                Top-Rated<br />
                eCommerce<br />
                Development<br />
                Company
              </h1>
              
              <p className="text-2xl opacity-90 mb-8 max-w-2xl">
                Our highly rated eCommerce development agency supports
                businesses to grow their sales and revenues while increasing their
                customer base.
              </p>
              
              <ul className="flex flex-col gap-4">
                <li className="text-xl flex flex-row gap-2 ">
                  <span className="">›</span>
                  <span>End-to-End eCommerce Design</span>
                </li>
                <li className="text-xl flex flex-row gap-2 ">
                  <span className="">›</span>
                  <span>Frontend & Backend Development</span>
                </li>
                <li className="text-xl flex flex-row gap-2 ">
                  <span className="">›</span>
                  <span>eCommerce Marketing</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link href="/contact" className="border border-white text-blue-700 bg-white py-3 px-6   font-semibold hover:text-shadow-blue-500 transition-colors">
                  REQUEST A QUOTE ›
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8">
                <div className="flex flex-row gap-2 items-center">
                  <Image 
                    src="/images/award1.svg" 
                    alt="5 Star DesignRush Reviews" 
                    width={50} 
                    height={50}
                  />
                  <div className="mt-2 text-center">
                    <div className="text-sm">5 Star DesignRush Reviews</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row gap-2 items-center">
                  <Image 
                    src="/images/award2.svg" 
                    alt="Ecommerce Excellence Award" 
                    width={50} 
                    height={50}
                  />
                  <div className="mt-2 text-center">
                    <div className="text-sm">Ecommerce Excellence</div>
                    <div className="text-sm">Award</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 ">
              {/* <div className="relative"> */}
                <Carousel items={carouselItems} />
                
                {/* <div className="absolute -bottom-8 right-0 bg-blue-800 p-3 rounded">
                  <div className="flex flex-col items-center text-white">
                    <div className="text-xs mb-1">SEE OUR WORK</div>
                    <div className="text-xl font-bold">IN ACTION</div>
                    <div className="text-xs mt-1">1 MINUTE</div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>
      
      {/* <Footer /> */}
    </div>
  );
}
