import React from 'react';
import HeaderComponent from './Header';
import RestaurantList from './RestaurantList';

export default function(){
    return (
        <div>
            <HeaderComponent />
            <main id="main">
                <RestaurantList />
            </main>
        </div>
    )
}
