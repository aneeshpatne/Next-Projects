import React,{ useContext } from 'react';
import styles from './styles/footer.module.css';
import { ThemeContext } from './ThemeProvider';
export default function Footer(){
    const {theme, toggleTheme } = useContext(ThemeContext);

return (<div id={styles.FooterContainer} className={theme ==='LightMode' ? styles.light-mode : ''}>
    <div id={styles.footer-text-container}><p>Made with <span className={styles.heart}>♥</span> by Aneesh</p></div>
</div>)
}