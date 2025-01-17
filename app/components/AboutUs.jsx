import { Link } from "@remix-run/react";

export default function AboutUs() {
    return (
        <section className="mt-4 mb-6  w-screen h-screen  relative bg-[url('/dshot.jpg')]">
            <div className="bg-white mt-1 w-4/5 absolute top-24 left-11 p-10 md:w-2/5 md:top-11 md:left-24 ">
                <h2 className="text-xl my-2 text-slate-900 md:text-3xl" >About US</h2>
                <p className="text-sm text-slate-600 leading-6" > Guava Homes is a premier residential real estate subsidiary of Guava Holdings, dedicated to delivering exceptional housing solutions that blend modern design with sustainable living.</p>
                <br />
                <p className="text-sm text-slate-600 leading-6" >With a focus on enhancing the quality of life for homeowners, Guava Home specializes in the develpment, construction, and management of innovative residential communities across key locations.</p>
                <br />
                <Link className="py-4 px-10 bg-slate-700 hover:bg-amber-300 text-gray-100 rounded-md mt-20" >Read More</Link>

            </div>
        </section>
    )
}