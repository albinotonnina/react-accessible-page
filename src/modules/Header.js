import React from 'react';
import NavComponent from './Nav';

import styles from './styles/Header.scss';

export default function () {
    return (
        <header className={styles.header}>
            <a href="#main" className={styles.skipLink}>Skip to main content</a>

            <div className={styles.head_top}>

                <img src="./assets/logo.png" alt="Deliveroo logo" className={styles.logo} />
                <img src="./assets/logo-small.png" alt="Deliveroo logo" className={styles.logoSmall} />

                <div className={styles.navWrapper}>
                    <NavComponent />
                </div>

            </div>

            <section className={styles.head_bottom}>
                <h1 className={styles.title}> <span className={styles.delivering}>[34] Restaurants delivering to</span><span className={styles.zone}>[ZONE]</span></h1>
                <p className={styles.paragraph}>[Zone-information]</p>
            </section>


        </header>
    )
}
