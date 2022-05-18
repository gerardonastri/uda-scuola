import {useState} from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import Link from 'next/link'


export default function Featured() {
    const src = 'https://cormano-api.cloud.municipiumapp.it/system/images/news/image/7/9/3/7/0/site_640_480_limit_soto_sito.JPG'
  return (
     <div className={styles.container}>
        <div className={styles.wrapper}>
           <div className={styles.info}>
                <h1>Educazione Stradale</h1>
                <p>Nel 2020 l’educazione civica è diventata materia integrante del sistema scolastico nazionale, noi abbiamo avuto la possibilità di sperimentare molto questa materia e di creare qualcosa di istruttivo e utile per le persone. Grazie all’aiuto di tutte le classi seconde e ai professori dell’istituto Margherita Hack siamo riusciti a raggruppare tutti i lavori realizzati durante l’anno scolastico e a raccoglierli in un unico sito.</p>
           </div>
           <div className={styles.imgContainer}>
            <Image className={styles.img} loader={() => src} src={src} layout="fill" />
           </div>
        </div>
     </div>
  );
}