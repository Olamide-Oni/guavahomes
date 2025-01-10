import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { createClient } from '@supabase/supabase-js';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LatestProperties from "../components/LatestProperties";
import { getLatestProperties } from "../utils/supabase.server";

export const loader = async ({ request, params }) => {
  const headers = new Headers();
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
  const propertyId = params.propertyId;
  const baseUrl = process.env.PUBLIC_STORAGE_URL; 

  const latestProperties = await getLatestProperties(3);
  
  const { data: listingData, error: listingError } = await supabase
    .from('listings')
    .select()
    .eq('property_id', propertyId)
    .single();

  if (listingError || !listingData) {
    console.error('Error fetching listing:', listingError?.message);
    return json({ listing: null, images: [] }, { headers });
  }

  const images = listingData.image_url.map(imagePath => ({
    url: `${process.env.SUPABASE_URL}/storage/v1/object/public/${imagePath}`,
    name: imagePath.split('/').pop()
  }));

  return json({ 
    listing: listingData, 
    images,
    latestProperties,
    baseUrl 
  }, { headers });
};

export default function PropertyListing() {
  const { listing, images, base_url } = useLoaderData();
  const scrollContainerRef = useRef(null);

  if (!listing) {
    return (
      <div className="p-4 text-center text-red-600">
        Property not found.
      </div>
    );
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex justify-between items-center w-full py-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {listing.property_type}
        </h1>
        <h2 className="text-xl font-bold text-gray-900">
          ₦{listing.naira_buy_price?.toLocaleString()}
        </h2>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Image Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 py-4 px-8 scroll-smooth hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {images.map((image, index) => (
            <div 
              key={image.name}
              className="flex-none w-[300px] h-[300px]" // Reduced size by approximately 50%
            >
              <img
                src={image.url}
                alt={`Property view ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="mt-6 grid grid-cols-[2fr_1fr] gap-8">
            <div className="property-info border-[1px] border-slate-300 p-8 ">
                <h4 className="font-semibold text-lg mt-4">Property Details</h4>
                <br />
                <p><strong> {listing.property_type}</strong></p>
                <br />
                <p className="text-sm text-slate-600 leading-6">Discover your ideal home in this stylish {listing.property_type} in {listing.location_lga}, perfect for both living and investment opportunities. This spacious {listing.property_type} features modern finishes, an open-plan living area, and abundant natural light, making it an inviting space for families and professionals alike.</p>
                <br />
                <p className="text-sm text-slate-600 leading-6">This {listing.property_type} is designed for comfort and convenience, with each bedroom offering generous space and storage. The well-equipped kitchen and living areas create an ideal environment for entertaining guests or relaxing at home  </p>
                <br />
                <p className="text-sm text-slate-600 leading-6">Situated in a prime location, this {listing.property_type} provides easy access to top schools, shopping centers, and recreational facilities. Enjoy the vibrant lifestyle of {listing.location_lga} while having a beautiful apartment to call home</p>
                <br />
               
            </div>
            <div className="search-latest flex flex-col gap-y-8">
                <div className="border-[1px] border-slate-300 h-14">

                </div>
                <section className='w-full border-[1px]'>
                        <Form action='' method='get' role="search" className='w-4/5 py-8 m-auto'>
                            <h3 className='block' >Advanced Search</h3>
                            <select name="location" id="location" className='block rounded border-[1px] border-slate-300 w-full my-5 py-3 pl-3'>
                                <option value="">Location</option>
                                <option value="lekki">Lekki</option>
                                <option value="maryland">Maryland</option>
                            </select>
                            <select name="status" id="" className='block border-[1px] border-slate-300 w-full my-5 py-3 pl-3'>
                                <option value="">Status(Buy, Sale)</option>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                            </select>
                            <select name="property_type" id="" className='block border-[1px] border-slate-300 w-full my-5 py-3 pl-3'>
                                <option value="">Property Type</option>
                                <option value="maisonette">Maisonette</option>
                                <option value="terrace">Terrace</option>
                                <option value="apartment">Apartment</option>
                            </select>
                            <button type="submit" className='block border-[1px] border-slate-300 w-full my-5 py-3 pl-3 bg-green-800 text-white'>Find Property</button>
                        </Form>              
                </section> 
                < LatestProperties limit={3}  />
            </div>     
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}