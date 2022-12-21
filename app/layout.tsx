import React from 'react';
import '../styles/globals.css'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Props = {
    children?: React.ReactNode | React.ReactChild | React.ReactChild[];
}

const RootLayout = ({ children }: Props) => 
  {
    return (
    <html lang="en">
        <body> 
            {/* figure out drawer */}
            {children}
            <Footer />
        </body>
    </html>
    );
  }

export default RootLayout