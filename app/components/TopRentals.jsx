import React, { useState } from "react";
import { luxurylistings } from '../data';
import { Link } from "@remix-run/react";
import { CiLocationOn } from "react-icons/ci";


export default function TopRentals() {
    const topRentals = luxurylistings.filter(listing =>
        listing.type === "Apartment"
    );

    const listings = topRentals.map(listing => 
        <li className="w-full mx-auto">
            <div className="h-72 md:w-60 md:h-48">
                <img src={listing.img} alt="" className="propImg w-full h-full object-cover" />
            </div>
            <div className="propInfo">
                <p className="text-red-500 my-3">{listing.type}</p>
                <h3 className="text-lg font-medium text-slate-700" >{listing.title}</h3>   
                <div className=" flex gap-x-2 text-slate-500 pt-3">
                     <CiLocationOn />
                     <p>{listing.location}</p>
                </div>
                <div className="bed-baths-sqm flex gap-x-4 text-gray-600">
                    <p>Beds: {listing.beds}</p>
                    <p>Baths: {listing.baths}</p>
                </div>
            </div>
        </li>
    )
    return (
        <section className="my-9 w-full overflow-hidden md:my-12">
            <div className="my-5 w-4/5 mx-auto md:w-4/5">
                <h2 className="text-2xl text-center md:text-4xl">Serviced Apartments in the Market</h2>
                <h4 className="my-1 text-center text-xs md:text-xl">Some of the finest luxury listings in the market, handpicked just for you</h4>
            </div>
            <section className="listings mt-12">
                <ul className="flex flex-col w-4/5 mx-auto gap-y-4 md:w-full md:flex-row md:gap-x-6">
                    {listings}
                </ul>
            </section>
            <section className="serviced-apartments w-4/5 mx-auto flex justify-center items-center flex-col my-16">
                <Link className="py-4 px-10 bg-slate-700 hover:bg-amber-300 text-gray-100 rounded-md" >Browse Properties For Rent</Link>
                <div className="my-6" >
                    <h1 className="text-2xl text-center md:text-4xl">Start Living in Lagos Finest Serviced Apartments</h1>
                    <p className="my-1 text-center text-xs md:text-xl" > Rent beautiful, fully furnished and serviced apartments for short stays in the best locations in Lagos</p>
                </div>
                <Link className="py-4 px-10 bg-slate-700 hover:bg-amber-300 text-gray-100 rounded-md" >Browse Our Serviced Apartments</Link>
            </section>
        </section>
    )
}