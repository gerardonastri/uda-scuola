import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {
  const iframe = `<iframe width="1000" height="800" style={{backgroundColor:"white", padding:"5px 0px 0 5px", border:"3px solid black", margin:"auto", display:"block"}} frameBorder="0" src="https://crosswordlabs.com/embed/io-vengo-dalla-strada"></iframe>`

    return (
      <div className={styles.container}>
          <Navbar />
          <h2 style={{textAlign: 'center'}}>Classe 2g</h2>
          <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/Diritto word.docx" download>
                  <img src="/screenDiritto.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/IL CODICE DELLA STRADA.pptx" download>
                  <img src="/screen-codice-della-starda.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/LAVORO EDUCAZIONE CIVICA.pptx" download>
                  <img src="/screenDirittoPPT.png" alt="" />
                </a>
            </div>
          </div>
            <Crossword iframe={iframe} />
            <div className={styles.stuffContainer}>
              <div className={styles.card}>
                <iframe width="480" height="340" src="https://www.youtube.com/embed/bu4ih7OpDuk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className={styles.card}>
                <iframe width="480" height="340" src="https://www.youtube.com/embed/E7VG-rBTcjw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className={styles.card}>
              <video controls>
                  <source src="/bilogia.mp4" type="video/mp4" />
              </video>
              </div>
            </div>
          <Footer />
    </div>
  )
}
