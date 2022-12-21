'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BiMenu} from 'react-icons/bi'

type Props = {
    children?: React.ReactNode | React.ReactChild | React.ReactChild[];
}

const Navbar = ({children}: Props) => {
  return (
    <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col mt-4">
            {/* <!-- Navbar --> */}
            <div className="w-100 navbar flex justify-between">
                <Link href="/">
                    <div className="flex-none px-2 mx-2"> 
                        <Image src={"/images/MF.png"} alt={"Icon of MF Photography"} width={50} height={50} />
                    </div>
                </Link>
                <div className="flex-end">
                    <div className="lg:hidden">
                        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                            <BiMenu size={40} />
                        </label>
                    </div> 

                    <div className="hidden lg:block ">
                        <ul className="menu menu-horizontal">
                            {/* This one will be a dropdown */}
                            <li><Link href={"/"}>GALLERIES</Link></li>    
                            <li><Link href={"/"}>ABOUT</Link></li>
                            <li><Link href={"/"}>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {children}
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-zinc-800 ">
                <li><Link href={"/"}>GALLERIES</Link></li>
                <li><Link href={"/"}>ABOUT</Link></li>
                <li><Link href={"/"}>CONTACT</Link></li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar