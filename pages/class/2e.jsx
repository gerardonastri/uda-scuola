import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {

  const iframe = `<iframe width="900" height="800" 
  style="background-color:white; padding:5px 0px 0 5px; border:1px solid black; margin:auto; display:block" 
  frameborder="0" src="https://crosswordlabs.com/embed/educazione-civica-2e"></iframe>`

    return (
      <div className={styles.container}>
          <Navbar />
          <h2 style={{textAlign: 'center'}}>Classe 2e</h2>
          <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/Rianimazione_ScienzeMotorie.pdf" download>
                  <img src="/rianimazione-2e.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/Responsailita_stradale.pdf" download>
                  <img src="/responsabilita-2e.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/Responsabilita_civile_penale_stradale.pptx" download>
                  <img src="/responsabilita2-2e.png" alt="" />
                </a>
            </div>
          </div>
            <Crossword iframe={iframe} />
          <Footer />
    </div>
  )
}
