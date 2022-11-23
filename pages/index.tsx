import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Head>
            <header>Masaya Funakoshi Photography</header>
        </Head>
        <h1 className='text-3xl font-bold underline'>Tailwind CSS App</h1>
    </div>
  )
}

export default Home
