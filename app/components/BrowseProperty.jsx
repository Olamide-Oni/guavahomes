import React, { useState } from "react";
import { Link, Form } from "@remix-run/react";

export default function BrowseProperty() {
  const [selectedOption, setSelectedOption] = useState("Buy");
  return (
    <div className="flex flex-col items-center">
      <div className="flex overflow-x-auto no-scrollbar w-full p-4">
          <div className="flex space-x-12 min-w-max px-4 mx-auto">
            {["Buy", "Manage", "Rent", "Sell"].map(option => (
              <button
                key={option}
                className={`cursor-pointer min-w-28 p-2 rounded-full bg-zinc-50 transition-colors duration-200 whitespace-nowrap ${
                  selectedOption === option ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedOption(option)}
                aria-pressed={selectedOption === option}
              >
                {option}
              </button>
            ))}
          </div>
      </div>


    <Form method="get" className="flex flex-col p-4 bg-zinc-50 w-full gap-y-4 rounded-[36px] outline outline-8 outline-orange-100 md:flex-row md:justify-around md:flex md:rounded-full md:space-x-4">
      <div className="relative md:w-full">
        <select name="" id="" className="block w-full rounded-full border-slate-500 border px-3 py-3 pl-10 pr-8 text-slate-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" className="text-slate-400 pr-6">Location</option>
          <optgroup label="Lagos Mainland" className="text-slate-800 font-semibold">
            <option value="">Maryland</option>
            <option value="">Ikeja</option>
          </optgroup>
          <optgroup label="Lagos Island">
            <option value="">Ikoyi</option>
            <option value="">Lekki</option>
            <option value="">Victoria Island</option>
          </optgroup>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      <div className="relative md:w-full">
        <select name="" id="" className="block w-full rounded-full border-slate-500 border px-3 py-3 pl-10 pr-8 text-slate-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Property Type</option>
          <option value="">Apartment</option>
          <option value="">Bungalow</option>
          <option value="">Commercial Space</option>
          <option value="">Detached</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <div className="relative md:w-full">
        <select name="" id="" className="block w-full rounded-full border-slate-500 border px-3 py-3 pl-10 pr-8 text-slate-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Rooms</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <Link  className="bg-slate-800 text-white py-2 px-3 border-solid border-2 rounded-full text-center w-3/4 mx-auto sm:rounded-md md:w-full">
        Browse Properties
      </Link>
    </Form>
  </div>
  );
}
