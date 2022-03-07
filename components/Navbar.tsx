import React from 'react';
import styles from './navbar.module.css'
import {ActiveLink} from "./ActiveLink";

const menuItems = [
    {text:"home", href:"/"},
    {text:"about", href:"/about"},
    {text:"contact", href:"/contact"},
    {text:"pricing", href:"/pricing"}
]


const Navbar = () => {
    return (
        // <nav className={styles.menu}>
        <nav className={styles['menu-container']}>
            {
                menuItems.map(page =>
                    <ActiveLink
                        key={page.href}
                        text={page.text}
                        href={page.href}
                    />)
            }
        </nav>
    );
};

export default Navbar;
