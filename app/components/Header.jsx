import { Link, NavLink } from "@remix-run/react"


export default function Header() {
    return (
        <div className="header flex min-h-14 max-h-14 justify-between items-center mx-10" >
            <div className="flex">
             <img src="/guava-logo.JPG" alt="" className="max-h-14" />
            </div>
            <ul className=" grow-[0.5] flex justify-between">
                <li>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}
                  to="">
                        Rent
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}
                                   to="">
                        Buy
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}
                                    to="">
                        Sell
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}
                                    to="">
                        Manage Property
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}
                                    to="">
                        Resources
                    </NavLink>
                </li>
            </ul>
            <Link className="bg-slate-800 text-white px-2 py-0.5 border-solid border-2 rounded-full"> Contact Us</Link>
        </div>

    )
}
