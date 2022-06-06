import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {

  const iframe = `<iframe src="https://learningapps.org/watch?v=p58h7quh322" style="border:0px;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`

    return (
      <div className={styles.container}>
          <Navbar />
          <h2 style={{textAlign: 'center'}}>Classe 2b</h2>
          <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/UDA - Latino 2B.pptx" download>
                  <img src="/scree-latino-2b.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/UDA Italiano 2B 2021_2022 definitiva.pptx" download>
                  <img src="/screen-italiano-2b.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/Tutte le strade portano a Roma.pdf" download>
                  <img src="/roma-2b.png" alt="" />
                </a>
            </div>
          </div>
            <Crossword iframe={iframe} />
          <Footer />
    </div>
  )
}
