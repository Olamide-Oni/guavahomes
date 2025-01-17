import { Form, Link } from "@remix-run/react";
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'
import BrowseProperty from "../components/BrowseProperty";
import LuxuryListings from "../components/LuxuryListings";
import IkoyiListings from "../components/IkoyiListings";
import TopRentals from "../components/TopRentals";
import AboutUs from "../components/AboutUs";
import Awards from "../components/Awards";
import HeroSection from "../components/HeroSection";

export const meta = () => {
  return [
    { title: "Guava Homes" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      < HeroSection />
  {/** <section className="mt-1 mb-6 w-screen h-screen relative flex flex-col items-center justify-center bg-[url('/hero-img.png')] md:mt-4">
    <div className="hero-text relative z-10 text-center">
      <h1 className="leading-7 text-3xl pt-5 font-semibold md:text-5xl md:my-4 md:leading-[4rem]">
        Buy, Manage, Rent or Sell <br /> Your Property with <a href="/buy">Ease</a> 
      </h1>
      <h4 className="my-6">Discover a hassle-free way to buy, sell, or rent properties.</h4>
    </div>
    
    
  </section>
  */}
  <AboutUs />
  < Awards />
  <div className="browse-properties w-4/5 mt-12 mx-auto">
      <BrowseProperty />
  </div>
  <LuxuryListings />
  <IkoyiListings />
  <TopRentals />   
</div>
  )

}

