import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { config } from '../../assets/config/author'
import styles from './Footer.module.scss'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={ styles.author }>
                <a href="https://andre23arruda.github.io/home/">
                    {(new Date).getFullYear()} © { config.author }
                </a>
            </div>

            <a
                href={`https://github.com/${ config.github }`}
                title={`GitHub @${ config.github }`}
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaGithub />
            </a>

            <a
                href={`https://www.linkedin.com/in/${ config.linkedin }`}
                title={`LinkedIn ${ config.author }`}
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaLinkedin />
            </a>
        </footer>
    )
}