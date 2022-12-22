import React from 'react'
import Navbar from '../Navbar'

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col background-hero h-screen justify-between">
        <Navbar />
        <div className="grid grid-rows-1 grid-cols-12">
            <div className="flex justify-center items-end pb-3 col-start-6">
                <div className='flex-col justify-center items-center'>
                </div>
            </div>
            <div className="
            flex flex-col  justify-center items-center col-start-7 col-span-5
            ">
                <div className="pb-20">
                    <h1 className="pb-2 font-light text-3xl tracking-widest">
                        Masaya <br/>
                        Funakoshi
                    </h1>
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