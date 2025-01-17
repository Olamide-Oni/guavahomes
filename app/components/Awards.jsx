

export default function Awards() {
    return (
        <section className="luxurylistings my-12 w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="listings-heading my-5 w-4/5 mx-auto flex justify-center items-center flex-col">
                <h2 className="text-xl my-2 text-slate-900 md:text-3xl">Awards We Have Received</h2>
                <h4 className="text-sm text-slate-600 leading-6">As a service-first team, Guava is built from a foundation of trust, experience, and integrity. We are passionate and daring professionals and we care about our clients, so it's no surprise that we're being recognised for our success in the African Real Estate Market</h4>
            </div>
            <div className="awards-catalog flex gap-x-6">
                <div className="bg-[url('/layeAwards.jpg')] h-56 w-52" ></div>
                <div className="bg-[url('/layeAwards.jpg')] h-56 w-52" ></div>
            </div>
        </section>
    )
}