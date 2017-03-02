import React from 'react';
import HeaderComponent from './Header';
import RestaurantList from './RestaurantList';

import styles from './styles/App.scss';

export default function(){

    return (
        <div className={styles.container}>
            <HeaderComponent />
            <main id="main">
                <RestaurantList />
            </main>
        </div>
    )
}
