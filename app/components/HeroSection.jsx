import React, { useState, useEffect } from 'react';
import '../app.css';
import CountUpClients from './CountUp';


const HeroSection = () => {
  const images = [
    'highrise.jpg',
    'luxurious-home-in-the-desert.jpg',
    'unsplash_MnlhHVfb-TA.png',
  ];

  const headings = [
    'Buy, Manage, Rent or Sell',
    "Let's Help You Find",
    "Move Into",
  ];
  const paragraphs = [
    'Discover a hassle-free way to buy, sell, or rent properties.',
    'Award-winning Construction Company and Real Estate Company',
    'Best Handpicked Listings',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  const handleChangeText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headings.length);
  };

  return (
    <div
      id="heroSection"
      className="hero-section absolute top-0"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        height: '100vh', // Adjust the height as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div id="intro-text-section" >
            <div id="intro-text" className="hero-text relative z-10 text-center">
                <h1 id="text-heading" className="leading-7 text-3xl pt-5 font-semibold md:text-5xl md:mt-6 md:leading-[4rem] text-slate-50">{headings[currentImageIndex]}<br /> Your Property with Ease</h1>
                <p id="text-paragraph" className="my-2 text-slate-50">{paragraphs[currentImageIndex]}</p>
            </div>
      </div>
      <div className="absolute top-[50%]">
            <div 
                className="listings-heading my-12 w-4/5 mx-auto flex justify-center items-center flex-col">
                        <h2 className="text-xl my-2 text-slate-50 md:text-3xl">We Set the Records </h2>
                        <h4 className="text-sm text-slate-50 leading-6">Our numbers back our words</h4>
                        <div className="flex gap-x-6 mt-8">
                        <CountUpClients stopCount={500} spanText="Happy Clients" />
                        <CountUpClients stopCount={250} spanText="Properties Sold" />
                        </div>
              </div>
      </div>

    </div>
  );
};

export default HeroSection;
