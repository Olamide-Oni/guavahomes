import { Link, useLoaderData, useOutletContext } from '@remix-run/react';

const storageBaseUrl = process.env.PUBLIC_STORAGE_URL;


export default function BuyListings({buyListings}) {
   {/** const { buyListings } = useOutletContext(); */} 
  
    
    return (
        <section>
            {buyListings.length ? (
                <ul className='grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-y-7'>
                    {buyListings.map((listing) => {
                       
                        const listingPrice = listing.dollar_buy_price || `₦${listing.naira_buy_price?.toLocaleString()}`;

                        return (
                        
                            <li key={listing.id}>
                                <Link to={`/property/listing/${listing.property_id}`}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${storageBaseUrl}${listing.image_url[0]})`,
                                            backgroundBlendMode: "overlay" // Optional for blending modes
                                        }}                      
                                        className="h-64 w-64 bg-cover bg-center rounded-md relative hover:scale-105 delay-100"
                                    > 
                                        <div className='absolute z-40 bottom-[10%] font-black font-mono w-4/5 mx-auto px-4 text-lg leading-7 text-slate-100'>
                                            <p className='text-white'>{listingPrice}</p>
                                            <p className='text-white'>{listing.property_type}</p>                                      
                                        </div>
                                    </div>                             
                                </Link>
                               
                            </li>
                        )

                    } )}
                </ul>
            ) : (
                <p>No Listings</p>
            )}
        </section>
    );
}
