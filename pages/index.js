import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bastioneye from '../img/bastioneye.svg'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bastion | Coming Soom</title>
        <meta name="description" content="To Securing Africa's burgeoning Tech Infrastructure" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main className={styles.main}>
        <div className="thebox">
        <Image
      src={bastioneye}
      alt="bastion logo"
    />
        </div>
        <h1 className={styles.title}>
          Coming Soon
        </h1>
      </main> 
    </div>
  )
}
