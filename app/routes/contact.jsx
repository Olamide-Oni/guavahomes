import { CiLocationOn } from "react-icons/ci";
import { Form } from "@remix-run/react";

export default function Contact() {
    return (
        <div>
             <section className="relative">
                <img src="/hero-img.png" alt="" className="max-h-60 w-full "/>
                <div className="absolute inset-y-1/2 z-50 text-rose-800 font-bold ">
                    <h3 className="text-stone-600">Home  <span className="text-orange-500">Latest Listings</span></h3>
                </div>
             </section>
            <div className="grid md:grid-cols-[1fr_2fr] w-4/5 mx-auto mt-16">
                <div className="flex flex-col gap-y-7 bg-lime-950 text-white p-6">
                    <h2>Our Contact Information</h2>
                    <p>Need to talk to someone? Kindly reach out to us via any of our communication channels with the details below</p>
                    <div className="my-7">
                        <div className="flex gap-x-3">
                            <CiLocationOn />
                            <h3>74a, Ladi Alakija Lekki phase 1</h3>
                        </div>
                        <div className="flex gap-x-3">
                            <CiLocationOn />
                            <h3>Email: info@guavahomes.com</h3>
                        </div>
                        <div className="flex gap-x-3">
                            <CiLocationOn />
                            <a href="https://wa.me/2347047500077">Call: (234) 704 750 0077</a>
                        </div>
                        <div className="flex gap-x-3">
                            <CiLocationOn />
                            <a href="https://wa.me/234704730009">Call: (234) 704 730 009</a>
                        </div>
                        <div className="flex gap-x-3">
                            <CiLocationOn />
                            <a href="https://wa.me/2349136000289">Call: (234) 913 600 0289</a>
                            
                        </div>
                        
                    </div>
                    <div>

                    </div>

                </div>

                <Form method="post" className="p-6 flex flex-col gap-y-8 bg-white" >
                    <h2>We want to hear from you!</h2>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4">
                            <input type="text" name="" id="" className="w-3/5 shadow-xl rounded-md" placeholder="Your Name" />
                            <input type="email" name="" id="" className="w-3/5 shadow-xl rounded-md" placeholder="Email Address" />
                        </div>
                        <input type="text" name="" id="" className="w-full shadow-xl rounded-md" placeholder="Subject"/>
                        <textarea name="" id="" className="w-full shadow-xl rounded-md" placeholder="Your Message"></textarea>
                    </div>                   
                    <input type="submit" value="Send Message" className="bg-red-800 w-min p-2 place-self-end text-white " />

                </Form>

               
            </div>
        </div>
    )
}