import React, { useEffect, useRef, useState } from "react";
import { ikoyilistings } from '../data';
import { CiLocationOn } from "react-icons/ci";

export default function IkoyiListings() {
    const scrollRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const scrollAmountRef = useRef(0);
    const itemsPerView = 6;
    const scrollDelay = 20;
    const scrollStep = 1;
    const itemGap = "gap-6";

    const startScroll = () => {
        if (scrollIntervalRef.current) return; // Prevent multiple intervals

        scrollIntervalRef.current = setInterval(() => {
            const scrollContainer = scrollRef.current;
            if (scrollContainer) {
                scrollAmountRef.current += scrollStep;
                scrollContainer.scrollLeft = scrollAmountRef.current;

                if (scrollAmountRef.current >= scrollContainer.scrollWidth / 2) {
                    scrollAmountRef.current = 0;
                }
            }
        }, scrollDelay);
    };

    const stopScroll = () => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
    };

    useEffect(() => {
        startScroll();
        return () => stopScroll();
    }, []);

    const listings = ikoyilistings.map((listing, index) => (
        <li 
            key={index} 
            className={`listing-item flex-none w-60 ${itemGap} whitespace-normal`}
            onMouseEnter={stopScroll}
            onMouseLeave={startScroll}
        >
            <div className="propImg-container w-full h-48 relative overflow-hidden group">
                <img 
                    src={listing.img} 
                    alt="" 
                    className="propImg w-full h-full object-cover transition-all duration-300 group-hover:opacity-75" 
                />
            </div>
            <div className="propInfo flex flex-col">
                <p className="text-red-500 my-3">{listing.type}</p>
                <h3 className="text-lg font-medium text-slate-700 w-full whitespace-normal break-words">
                    {listing.title}
                </h3>
                <div className="listing-location flex gap-x-2 text-slate-500 pt-3">
                    <CiLocationOn />
                    <p>{listing.location}</p>
                </div>
                <div className="bed-baths-sqm flex gap-x-4 text-gray-600">
                    <p>Beds: {listing.beds}</p>
                    <p>Baths: {listing.baths}</p>
                </div>
            </div>
        </li>
    ));

    return (
        <section className="luxurylistings my-12 w-full overflow-hidden">
            <div className="listings-heading my-5 w-1/2 mx-auto">
                <h2 className="text-5xl">Ikoyi Luxury Listings</h2>
                <h4>Some of the finest luxury listings in the market, handpicked just for you</h4>
            </div>
            <section className="listings relative">
                <ul ref={scrollRef} className="flex overflow-hidden gap-6">
                    {listings}
                    {listings}
                </ul>
            </section>
        </section>
    );
}