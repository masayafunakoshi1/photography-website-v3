import React from 'react'
import { NextPage } from 'next'

import LandingSection from '../../components/Home/LandingSection'
import PictureSection from '../../components/Home/PictureSection'
import AboutMeSection from '../../components/Home/AboutMeSection'
import ContactSection from '../../components/Home/ContactSection'

const Page: NextPage = () => {

    return (
        <div>
            <LandingSection />
            <PictureSection />
            <AboutMeSection />
            <PictureSection />
            <ContactSection />
        </div>
    )
}

export default Page