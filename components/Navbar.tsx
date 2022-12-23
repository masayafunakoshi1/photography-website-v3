'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {
  return (
        <div>
            {/* <!-- Navbar --> */}
            <div className="w-100 absolute navbar bg-transparent flex justify-between max-h-28 pt-3 px-5">
                <Link href="/">
                    <div className="flex-none px-2"> 
                        <Image src="/images/MF.png" priority alt={"Icon of MF Photography"} width={30} height={30} />
                    </div>
                </Link>
                <div className="flex-end">
                    <div className="lg:hidden">
                        <label className="btn btn-square btn-ghost">
                            <RxHamburgerMenu size={25} />
                        </label>
                    </div> 

                    <div className="hidden lg:block">
                        <ul className="menu menu-horizontal justify-around">
                            {/* This one will be a dropdown */}
                            <li>
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <label tabIndex={0}>GALLERIES 👇</label>
                                    <ul tabIndex={0} className="menu bg-zinc-700 bg-opacity-80 dropdown-content p-2 shadow rounded-box max-w-fit">
                                        <li><Link href={'/'}>Weddings</Link></li> 
                                        <li><Link href={'/'}>Events</Link></li>
                                        <li><Link href={'/'}>Portraits</Link></li>
                                    </ul>
                                </div>
                            </li>    
                            <li className="disabled" />
                            <li><Link href={"/"}>ABOUT</Link></li>
                            <li className="disabled" />
                            <li><Link href={"/"}>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar