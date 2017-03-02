import React from 'react';

export default function () {

    const showNav = ()=>{
      console.log('click');
    };

    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/profile/account">£8.55</a></li>
                <li><a href="/profile">Simon Rohrbach</a></li>
                <li>
                    <button onClick={showNav}>&#9776;</button>
                </li>
            </ul>
        </nav>
    )
}
