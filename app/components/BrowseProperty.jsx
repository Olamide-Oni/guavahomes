import React, { useState } from "react";
import { Link } from "@remix-run/react";

export default function BrowseProperty() {
  const [selectedOption, setSelectedOption] = useState("Buy");

  // Define content for each option
  const content = {
    Buy: {
      location: "Lekki, Lagos",
      when: "Buying now",
      url: "Browse buying options",
    },
    Manage: {
      location: "Your Property location",
      when: "Buying now",
      url: "Browse buying options",
    },
    Rent: {
      location: "Maryland, Lagos",
      when: "Available now",
      url: "Browse rental properties",
    },
    Sell: {
      location: "Ikoyi, Lagos",
      when: "Selling soon",
      url: "Browse selling listings",
    },

  };

  return (
    <div className="flex flex-col items-center">
    <div className="flex space-x-12 justify-center w-full p-4">
      {["Buy", "Manage", "Rent", "Sell"].map(option => (
        <button
          key={option}
          className={`cursor-pointer min-w-28 p-2 rounded-full bg-zinc-50 transition-colors duration-200 ${
            selectedOption === option ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => setSelectedOption(option)}
          aria-pressed={selectedOption === option}
        >
          {option}
        </button>
      ))}
    </div>

    <section className="flex space-x-12 p-4 bg-zinc-50 w-full rounded-full shadow-xl justify-around">
      <div>
        <h5 className="text-slate-400">Locationnn</h5>
        <p className="text-slate-800 font-semibold">{content[selectedOption].location}</p>
      </div>
      <div>
        <h5 className="text-slate-400">When</h5>
        <p className="text-slate-800 font-semibold">{content[selectedOption].when}</p>
      </div>
      <Link to={content[selectedOption].url} className="bg-slate-800 text-white py-2 px-3 border-solid border-2 rounded-md">
        Browse Properties
      </Link>
    </section>
  </div>
  );
}
