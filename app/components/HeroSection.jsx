import React, { useState, useEffect } from 'react';
import '../app.css';
import CountUpClients from './CountUp';

const HeroSection = () => {
  const desktopImages = [
    'highrise.jpg',
    'reii.jpg',
    'bare2.jpg',
  ];

  const mobileImages = [
    'highriseM.png',
    'reiiM.png',
    'bare2M.png',
  ];

  const headings = [
    'Buy, Manage, Rent or Sell',
    'Creating vibrant communities',
    'Do You Have A Bare Land?',
  ];

  const headingsBr = [
    'Your Property With Ease',
    'sustainable real estate development',
    "Let's help you develop it",
  ];

  const paragraphs = [
    'Discover a hassle-free way to buy, sell, or rent properties.',
    'Award-winning Construction Company and Real Estate Company',
    'Best Handpicked Listings',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    
    handleResize();

    
    window.addEventListener('resize', handleResize);

  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [desktopImages.length]);

  return (
    <div
      id="heroSection"
      className="hero-section absolute top-0 bg-cover md:bg-contain"
      style={{
        backgroundImage: `url(${
          isMobile ? mobileImages[currentImageIndex] : desktopImages[currentImageIndex]
        })`,
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div id="intro-text-section">
        <div id="intro-text" className="hero-text relative z-10 text-center pt-16 md:pt-2 text-[#f5fafa]">
          <h1 id="text-heading" className="leading-10 md:leading-10 text-3xl pt-10 md:pt-4 font-semibold w-4/5 mx-auto md:text-4xl md:mt-6 md:leading-[4rem]">
            {headings[currentImageIndex]}<br />{headingsBr[currentImageIndex]}
          </h1>
          <p id="text-paragraph" className="my-2 mx-auto w-4/5 text-lg md:text-xl ">{paragraphs[currentImageIndex]}</p>
        </div>
      </div>
      <div className="absolute top-[50%] md:top-1/3">
        <div className="listings-heading my-12 w-4/5 mx-auto flex justify-center items-center flex-col">
          <h2 className="text-xl my-2 text-slate-50 md:text-3xl">We Set the Records </h2>
          <h4 className="text-sm text-slate-50 leading-6">Our numbers back our words</h4>
          <div className="flex gap-x-6 mt-8">
            <CountUpClients stopCount={250} spanText="Happy Clients" />
            <CountUpClients stopCount={100} spanText="Properties Sold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
