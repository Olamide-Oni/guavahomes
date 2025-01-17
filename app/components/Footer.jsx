import React from 'react';
import { Link, Form } from "@remix-run/react";

export default function Footer() {
    return (
        <section className='min-h-96 bg-green-700 px-5 py-8  text-slate-100 md:px-28 md:py-20 ' >
            <div className=' w-full flex flex-col gap-y-8 md:grid md:grid-cols-3' >
                <div className='' >
                    <h3 className='mb-6 font-semibold'>Quick Links</h3>
                    <div className='flex flex-col gap-x-14 gap-y-9 md:flex-row  '>
                        <div className='flex flex-col gap-y-3'>
                            <Link>Awards</Link>
                            <Link>Careers - Join our Team</Link>
                            <Link>Market Knowledge</Link>
                            <Link>Referral Program</Link>
                            <Link>Press & Publications</Link>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <Link>FAQs</Link>
                            <Link>Our Blogs</Link>
                            <Link>Media</Link>
                            <Link>List with us</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='mb-6 font-semibold'>Contact Us</h3>
                    <div className='flex flex-col gap-y-3'>
                        <p>info@guavahomes.com</p>
                        <p>Ladi Alakija Lekki phase 1</p>
                        <p>+234 813 243 5626</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <h3 className='mb-6 font-semibold'>Newsletter</h3>
                    <Form>
                        <input type="email" name="" id="" />
                    </Form>
                    <div>
                        <h3>Follow Us</h3>
                    </div>  
                </div>
            </div>  
        </section>
    )
}