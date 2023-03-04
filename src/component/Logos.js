import React from 'react';
import styles from "./Logos.module.css"
import enamad from "../images/enamad.png"
import telegram from "../images/tel.png"
import phone from "../images/phone.webp"

const Logos = () => {
    return (
        <div className={styles.container}>
           <h3>Who Support Us?</h3> 
           <div>
                <img src={enamad} alt="enamad" />
                <img src={telegram} alt="telegram" />
                <img src={phone} alt="phone"/>
           </div>
        </div>
    );
};

export default Logos;