import { Link } from "@remix-run/react";

export default function AboutUs() {
    return (
        <section className="mt-4 mb-6  w-screen h-screen  relative bg-[url('/beachDroneView.jpg')]">
            <div className="bg-white mt-1 w-4/5 absolute top-24 left-11 p-10 md:w-2/5 md:top-11 md:left-24 ">
                <h2 className="text-xl my-2 text-slate-900 md:text-3xl" >About US</h2>
                <p className="text-sm text-slate-600 leading-6" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam, iusto quia a in nihil odio exercitationem doloribus, et temporibus nesciunt ratione voluptates. Ex optio deserunt incidunt fugiat ipsam oficiis iste tempora nostrum quidem.</p>
                <br />
                <p className="text-sm text-slate-600 leading-6" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore veritatis, omnis nostrum placeat porro suscipit, veniam, aut voluptatum mollitia esse pariatur assumenda architecto asperiores ullam. </p>
                <br />
                <Link className="py-4 px-10 bg-slate-700 hover:bg-amber-300 text-gray-100 rounded-md mt-20" >Read More</Link>

            </div>
        </section>
    )
}