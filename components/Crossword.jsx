import {useState} from 'react';
import styles from '../styles/Crossword.module.css';
import Image from 'next/image';
import Link from 'next/link'
import Crossword from '@jaredreisinger/react-crossword'

export default function crossword({iframe}) {
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
        <div className={styles.iframeContainer} dangerouslySetInnerHTML={{__html: iframe}} />
     </div>
  );
}