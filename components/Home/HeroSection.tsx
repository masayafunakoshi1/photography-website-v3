import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col background-hero h-screen justify-between">
        <Navbar />
        <div className="grid grid-rows-1 grid-cols-12">

            <div className="flex justify-end items-end pb-3 col-start-6">
                <div >
                    <Image src={"/images/Ellipse.svg"} alt={"Scroll down ellipses"} width={5} height={5} className="box-glow" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center col-start-7 col-span-5">
                <div className="pb-20">
                    <p className="pb-2 font-light text-3xl tracking-widest leading-8">
                        Masaya <br/>
                        Funakoshi <br/>
                        <span className="text-lg font-light tracking-wide">Photography</span>
                    </p>

                    <div className="font-roboto text-xs font-thin ">
                        <p>Events, Weddings, Portraits</p>
                        <p>Let me capture your story</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection