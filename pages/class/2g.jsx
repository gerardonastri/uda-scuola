import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Class.module.css'
import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Crossword from '../../components/Crossword'

export default function Class() {
    return (
      <div className={styles.container}>
          <Navbar />
            <Crossword />
          <Footer />
    </div>
  )
}
