import React from 'react'

import LandingSection from '../components/Home/LandingSection'
import PictureSection from '../components/Home/PictureSection'
import AboutMeSection from '../components/Home/AboutMeSection'
import ContactSection from '../components/Home/ContactSection'

const Page = () => {

    return (
        <div className='p-2 flex-row justify-center items-center overflow-hidden'>
            <LandingSection />
            <PictureSection />
            <AboutMeSection />
            <PictureSection />
            <ContactSection />
        </div>
    )
}

export default Page