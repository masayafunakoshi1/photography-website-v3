import React from 'react'
import Navbar from '../Navbar'

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col background-hero h-screen justify-between">
        <Navbar />
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="flex justify-center items-end pb-3 col-start-2">
                ellipses
            </div>
            <div className="flex flex-col col-start-3 pb-10 justify-center items-center">
                <div>
                    <h1 className="pb-5 font-light text-xl tracking-wider">
                        Masaya <br/>
                        Funakoshi
                    </h1>
                    <div className="text-md font-light ">
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