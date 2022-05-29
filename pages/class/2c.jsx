import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {

  const iframe = `<iframe src="https://learningapps.org/watch?v=pxgk2e2u522" style="border:0px;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`

    return (
      <div className={styles.container}>
          <Navbar />
          <h2 style={{textAlign: 'center'}}>Classe 2c - <a href="https://sites.google.com/iismargheritahackbaronissi.edu.it/allenailtuosensocivico/home" ><span>https://sites.google.com/iismargheritahackbaronissi.edu.it/allenailtuosensocivico/home</span></a></h2>
          <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/ed-civica-2c.pptx" download>
                  <img src="/screen-edcivica-2c.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/cartelli-stradali-2c.png" download>
                  <img src="/cartelli-stradali-2c.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/alcol-2c.png" download>
                  <img src="/alcol-2c.png" alt="" />
                </a>
            </div>
          </div>
            <Crossword iframe={iframe} />
        <div className={styles.stuffContainer}>
            <div className={styles.card}>
                <a href="/LE STRADE ROMANE.pptx" download>
                  <img src="/strade-romane.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/LA DROGA E GLI EFFETTI SUL CERVELLO.pptx" download>
                  <img src="/droga-2c.png" alt="" />
                </a>
            </div>
            <div className={styles.card}>
                <a href="/L'educazione stradale e la coscienza sociale-2C-Fisica (1).pptx" download>
                  <img src="/coscienza-sociale-2c.png" alt="" />
                </a>
            </div>
        </div>
        <Footer />
    </div>
  )
}
