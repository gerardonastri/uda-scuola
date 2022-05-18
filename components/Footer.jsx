import {useState} from 'react';
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { style } from '@mui/system';

export default function Navbar() {
 
  return (
     <div className={styles.container}>
         <div className={styles.wrapper}>
            <div className={styles.linksContainer}>
                <div className={styles.links}>
                    <h3>LINKS</h3>
                    <Link passHref href="/home">Home</Link>
                    <Link passHref href="/contact">Contact</Link>
                    <Link passHref href="/about">About</Link>
                    <Link passHref href="https://jer-modern-blog.herokuapp.com/">Blog</Link>
                </div>
                <div className={styles.links}>
                    <h3>ABOUT ME</h3>
                    <Link passHref href="/home">About Me</Link>
                    <Link passHref href="https://jer-modern-blog.herokuapp.com/">Blog</Link>
                    <Link passHref href="/about">Privacy Police</Link>
                    <Link passHref href="/home">Terms Of Service</Link>
                </div>
                <div className={styles.links}>
                    <h3>CONNECT</h3>
                    <Link passHref href="https://www.linkedin.com/in/gerardo-nastri-a31240237/">
                        <span><LinkedInIcon /> LinkedIn</span>
                    </Link>
                    <Link passHref href="https://github.com/gerardonastri">
                        <span><GitHubIcon /> GitHub</span>
                    </Link>
                    <Link passHref href="https://www.instagram.com/illgerardo/">
                        <span><InstagramIcon /> Instagram</span>
                    </Link>
                    <Link passHref href="https://www.facebook.com/profile.php?id=100009579646708">
                        <span><FacebookIcon /> Facebook</span>
                    </Link>
                </div>
            </div>
            <hr />
            <span>Built by <a href="mailto:gerardonastri.dev@gmail.com?subject=Mail" target="_blank" className={styles.footerEmail}>gerardonastri@gmail.com</a></span>
         </div>
     </div>
  );
}