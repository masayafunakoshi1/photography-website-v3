import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = ({ children }: {
    children: React.ReactNode;
}) => 
  {
    return (
    <html lang="en">
        <body className='p-2 w-100'>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
    );
  }

export default RootLayout