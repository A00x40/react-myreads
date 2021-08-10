import React from 'react'
import './NavBar.css'

export default function NavBar(props) {

    const scroll = props.scroll;

    return (
        <div className="navbar-menu sec0">
            <ul id="navbar-list">
                <li>
                    <button value="sec1" href="/#" onClick={ (e) => scroll(e) }>currentlyReading</button>
                </li>
                <li>
                    <button value="sec2" href="/#" onClick={ (e) => scroll(e) }>wantingToRead</button>
                </li>
                <li>
                    <button value="sec3" href="/#" onClick={ (e) => scroll(e) }>read</button>
                </li>
            </ul>
        </div>
    );
}
