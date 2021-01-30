import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {  FiSettings } from "react-icons/fi";


export default function Navbar () {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    //hide mobile nav
    const closeNav = () => {
        setMobileNavOpen(false)
    }

    //show mobile nav
    const openNav = () => {
        setMobileNavOpen(true)
    }

    return (
        <div className={styles.container}>
            <div className={!isMobileNavOpen ? `${styles.overlay} + ' ' + ${styles.hide}` : `${styles.overlay} + ' ' + ${styles.show}`} id="overlay">
                <div className={styles.closebtn} onClick={closeNav}>&times;</div>
                <nav className={styles.overlayContent}>
                    <ul>
                        <li className={styles.mediumText} > PROFILE</li>
                        <li className={styles.mediumText}>APPOINTMENTS</li>
                        <li className={styles.mediumText} >WALK-IN</li>
                        <li className={styles.mediumText}>SETTING </li>
                       
                    </ul>
                </nav>
            </div>
            <nav className={styles.navBarContainer}>
                <ul className={styles.leftMenu}>
                    <li className={`${styles.brandName}`}>Appoint</li>
                </ul>
                <ul className={styles.rightMenu}>
                    
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><button className={styles.btns}>Appointments</button></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><button className={styles.btns}>Walk-in</button></li>
                    <li className={`${styles.menuIcons} + ' ' + ${styles.smallScreenHidden}`}>< FiSettings color="blue" /></li>
                    <span className={`${styles.menuIcons} + ' ' + ${styles.smallScreenShow} + ' ' + ${styles.hamburger}`} onClick={openNav}>&#9776;</span>
                </ul>
            </nav>
        </div>
    )
}
