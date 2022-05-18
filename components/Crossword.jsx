import {useState} from 'react';
import styles from '../styles/Crossword.module.css';
import Image from 'next/image';
import Link from 'next/link'
import Crossword from '@jaredreisinger/react-crossword'

export default function crossword() {
    const data = {
        across: {
          1: {
            clue: "organo che metabolizza l'etanolo",
            answer: 'intestino',
            row: 0,
            col: 0,
          },
        },
        down: {
          2: {
            clue: 'three minus two',
            answer: 'ONE',
            row: 0,
            col: 2,
          },
        },
      }
  return (
     <div className={styles.container}>
        <div className={styles.Crossword}>
        <iframe width="1000" height="800" style={{backgroundColor:"white", padding:"5px 0px 0 5px", border:"3px solid black", margin:"auto", display:"block"}} frameborder="0" src="https://crosswordlabs.com/embed/io-vengo-dalla-strada"></iframe>
        </div>
     </div>
  );
}