import {useState} from 'react';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false)
 
  return (
     <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image  src='/logo.png' height={50} width={50}  />
          <Link passHref href="/" >
            <h2 style={{cursor: 'pointer'}}>Margherita Hack</h2>
          </Link>
        </div>
        <div className={styles.links}>
            <Link passHref href="/home">Home</Link>
            <Link passHref href="https://www.iismargheritahackbaronissi.edu.it/contact">Contact</Link>
            <span onMouseOver={() => setShowDropDown(true)}>Classi <ArrowDropDownIcon/></span>
            <div onMouseLeave={() => setShowDropDown(false)} className={showDropDown ? `${styles.dropdown} ${styles.display}` : styles.dropdown}>
              <Link passHref href="/class/2a">Classe 2A</Link>
              <Link passHref href="/class/2b">Classe 2B</Link>
              <Link passHref href="/class/2c">Classe 2C</Link>
              <Link passHref href="/class/2d">Classe 2D</Link>
              <Link passHref href="/class/2e">Classe 2E</Link>
              <Link passHref href="/class/2f">Classe 2F</Link>
              <Link passHref href="/class/2g">Classe 2G</Link>
            </div>
            <div className={styles.icons}>
              <Link passHref href="https://www.linkedin.com/in/gerardo-nastri-a31240237/">
                <LinkedInIcon />
              </Link>
              <Link passHref href="https://github.com/gerardonastri">
                <GitHubIcon />
              </Link>
              <Link passHref href="https://www.instagram.com/illgerardo/">
                <InstagramIcon />
              </Link>
              <Link passHref href="https://www.facebook.com/profile.php?id=100009579646708">
                <FacebookIcon />
              </Link>
            </div>
        </div>
     </div>
  );
}