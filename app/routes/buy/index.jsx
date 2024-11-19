import { Outlet } from '@remix-run/react';

export default function Buy() {

    return (
        <div>
            <section className="relative">
                <img src="/hero-img.png" alt="" className="max-h-96 w-full grayscale-[80%]"/>
                <div className="absolute inset-y-1/2 z-50 text-rose-800 font-bold ">
                    <h3 className="text-stone-600">Home  <span className="text-orange-500">Latest Listings</span></h3>
                </div>
             </section>
             <section>
                
             </section>


        </div>
        
    )
}