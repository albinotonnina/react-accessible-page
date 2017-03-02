import React from 'react';
import NavComponent from './Nav';

export default function () {
    return (
        <header>
            <a href="#main">Skip to main content</a>

            <figure>
                <img src="./assets/logo.png" alt="Deliveroo logo"/>
                <figcaption>Deliveroo</figcaption>
            </figure>

            <NavComponent />

            <section>
                <h1>[34] Restaurants delivering to [ZONE]</h1>
                <p>[Zone-information]</p>
            </section>


        </header>
    )
}
