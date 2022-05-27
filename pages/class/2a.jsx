import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {

    const iframe = `<iframe src="https://learningapps.org/watch?v=pji0opjut22" style="border:0px;width:100%;height:500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
    return (
      <div className={styles.container}>
          <Navbar />
           <h2 style={{textAlign: 'center'}}>Classe 2a</h2>
          <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/Educazione Civica GEOSTORIA Classe II A. (1).pptx" download>
                  <img src="/screen-ppt-2a.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/CITTADINANZA TERMINI LATIN 2.pdf" download>
                  <img src="/screen-fondamentali-2a.png" alt="" />
                </a>
            </div>
          </div>
            <Crossword iframe={iframe} />
          <Footer />
    </div>
  )
}
