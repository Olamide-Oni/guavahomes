import CountUpClients from "./CountUp";

export default function Awards() {
    return (
        <section className="luxurylistings my-12 w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="listings-heading my-5 w-4/5 mx-auto flex justify-center items-center flex-col">
                <h2 className="text-5xl my-2 text-slate-800">Awards</h2>
                <h4 className="text-center text-sm text-slate-600 leading-6">As a service-first team, Guava is built from a foundation of trust, experience, and integrity. We are passionate and daring professionals and we care about our clients, so it's no surprise that we're being recognised for our success in the African Real Estate Market</h4>
            </div>
            <div className="awards-catalog flex gap-x-6">
                <div className="bg-[url('/layeAwards.jpg')] h-60 w-52" ></div>
                <div className="bg-[url('/layeAwards.jpg')] h-60 w-52" ></div>
                <div className="bg-[url('/layeAwards.jpg')] h-60 w-52" ></div>
                <div className="bg-[url('/layeAwards.jpg')] h-60 w-52" ></div>
            </div>
            <div className="listings-heading my-12 w-4/5 mx-auto flex justify-center items-center flex-col">
                <h2 className="text-5xl my-2 text-slate-800">We Set the Records </h2>
                <h4 className="text-center text-sm text-slate-600 leading-6">Our numbers back our words</h4>
                <div className="flex gap-x-6 mt-12">
                <CountUpClients stopCount={1500} spanText="Happy Clients" />
                <CountUpClients stopCount={300} spanText="Properties Sold" />
                </div>
            </div>

        </section>
    )
}