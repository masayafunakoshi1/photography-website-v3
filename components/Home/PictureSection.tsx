import React from 'react';
import Image from 'next/image';


const PictureSection = () => {
  return (
    <div className="flex flex-col h-max w-full py-10 px-5 justify-center items-center space-y-14">
        <div className="self-start">
            <div className="bg-slate-500 h-72 w-44">

            </div>
        </div>

        <div className="">
            <Image src={"/images/Couple-Twirl.jpg"} alt={"A picture of a couple twirling"} width={350} height={225} className="m-0"/>
        </div>

        <div className="self-end bg-slate-500 h-72 w-44">

        </div>
    </div>
  )
}

export default PictureSection