import { Link } from "@remix-run/react";

export default function AboutUs() {
    return (
        <section className="mt-4 mb-6 w-screen h-screen relative bg-[url('/beachDroneView.jpg')]">
            <div className="bg-white mt-4 w-2/5 absolute top-14 left-24 p-10  ">
                <h2 className="text-5xl my-2 text-slate-900" >About US</h2>
                <p className="text-sm text-slate-600 leading-6" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam, iusto quia a in nihil odio exercitationem doloribus, et temporibus nesciunt ratione voluptates. Ex optio deserunt incidunt fugiat ipsam oficiis iste tempora nostrum quidem. Atque id quibusdam vitae iusto esse dignissimos illo neque, officia consequatur odit enim, consequuntur cupiditate, illum necessitatibus quos. Vero sequi minus mollitia corporis ipsa dolor itaque? </p>
                <br />
                <p className="text-sm text-slate-600 leading-6" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore veritatis, omnis nostrum placeat porro suscipit, veniam, aut voluptatum mollitia esse pariatur assumenda architecto asperiores ullam. Dicta ducimus non molestiae vero, porro, quidem explicabo accusamus quia quasi vel voluptatum delectus? </p>
                <br />
                <Link className="py-4 px-10 bg-slate-700 hover:bg-amber-300 text-gray-100 rounded-md mt-20" >Read More</Link>

            </div>
        </section>
    )
}