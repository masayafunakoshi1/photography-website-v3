import React from 'react'

import HeroSection from '../components/Home/HeroSection'
import PictureSection from '../components/Home/PictureSection'
import AboutMeSection from '../components/Home/AboutMeSection'
import ContactSection from '../components/Home/ContactSection'

const Page = () => {

    return (
        <div className="flex flex-col overflow-hidden">
            <HeroSection />
            <PictureSection/>
            <AboutMeSection />
            <PictureSection />
            <ContactSection />
        </div>
    )
}

export default Page