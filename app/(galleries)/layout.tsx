import React from 'react';
import '../styles/globals.css'
import Navbar from '../../components/Navbar';

const GalleryLayout = ({ }: {
    children: React.ReactNode;
}) => 
  {
    return (
    <html lang="en">
        <body>
            <div> 
                <Navbar />
            </div>
        </body>
    </html>
    );
  }

export default GalleryLayout