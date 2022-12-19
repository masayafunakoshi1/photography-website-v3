'use client';
import Image from "next/image";
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="navbar w-100 bg-transparent">
        <div className="pl-3 navbar-start">
            <Image src={"/../public/images/MF.png"} alt={"Icon of MF Photography"} width={40} height={40} />
        </div>
        <div className="navbar-end pr-3 ">
            {/* if it's at tablet size  */}
            <button className="btn btn-square btn-ghost" onClick={() => console.log("navigation opened")}>
                <BiMenu size={40} />
            </button>
        </div>
    </div>
  )
}

export default Navbar