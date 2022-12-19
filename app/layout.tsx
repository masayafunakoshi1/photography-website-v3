import React from 'react'
import Head from 'next/head';

const RootLayout = ({ children }: {
    children: React.ReactNode;
}) => 
  {
    return (
    <html lang="en">
        <Head>
            <title>Masaya Funakoshi Photography</title>
        </Head>
        <body>
            {/* Add nav bar */}
            {children}
            {/* Add footer */}
        </body>
    </html>
    );
  }

export default RootLayout