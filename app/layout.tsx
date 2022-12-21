import React from 'react';
import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = ({ children }: {
    children: React.ReactNode;
}) => 
  {
    return (
    <html lang="en">
        <body>
            <div>
                <Navbar>
                    {children}
                </Navbar>
                <Footer />
            </div>
        </body>
    </html>
    );
  }

export default RootLayout