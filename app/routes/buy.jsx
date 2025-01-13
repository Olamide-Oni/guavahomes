import { useLoaderData, Form } from '@remix-run/react';
import { json } from "@remix-run/node";
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import BuyListings from '../components/BuyListings';
import LatestProperties from '../components/LatestProperties';
import { getLatestProperties } from "../utils/supabase.server";

export async function loader({ request }) {
  const headers = new Headers();

  const supabase = createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options))                                               
        )
      },
    },
  });
  
  const { data, error } = await supabase.from('listings').select().eq('buy', true);
  
  if (error) {
    console.error("Supabase Error:", error);
    throw new Response("Failed to fetch data", { status: 500 });
  }
    
  const latestProperties = await getLatestProperties(supabase, 3);
  const baseUrl = process.env.PUBLIC_STORAGE_URL; 

  return json({ 
    buyListings: data,
    latestProperties,
    baseUrl
   }, { headers });
}
export default function Buy() {
    const { buyListings } = useLoaderData(); 
    const base_url = "https://xzzeddartgrwwdpcfsic.supabase.co/storage/v1/object/public/";

    return (
        <div className='bg-gray-100'>
            <section className="relative">
                <img src="/hero-img.png" alt="" className="max-h-96 w-full grayscale-[80%]"/>
                <div className="absolute inset-y-1/2 z-50 text-rose-800 font-bold ">
                    <h3 className="text-stone-600">Home  <span className="text-orange-500">Latest Listings</span></h3>
                </div>
             </section>
             <section className="grid grid-cols-[1fr_2fr] w-full my-7 mx-2 gap-x-7 "> 
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
                            <button type="submit" className='block border-[1px] border-slate-300 w-full my-5 py-3 pl-3'>Find Property</button>
                        </Form>  

                        < LatestProperties limit={3} />            
                </section> 
               <section>                
                    < BuyListings buyListings={buyListings} />              
               </section>
             </section>
        </div>
        
    )
}