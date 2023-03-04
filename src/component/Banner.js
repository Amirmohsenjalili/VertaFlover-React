import React from 'react';
 
import styles from "./Banner.module.css"; 
import banner from "../images/banner.jpg"



const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                 <h1>Verta Flower</h1>
                <p>
                    Refreshing <span>life</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;