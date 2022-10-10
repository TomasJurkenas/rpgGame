import React from "react";
import {Link} from "react-router-dom"
import './mainMenu.css'

// issirinkti veikeja
export function MainMenu (){
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         speed: 3
    //     }
    // }
    return(
        <>
            <h1>Dungeon Crawler</h1>
            <nav>
                <Link to="/mainMenu">Home</Link>
                <Link to="/contacts"> Contacts</Link>
            </nav>
            <main>
                <div>about and stat</div>
                <div> veikejo ft
                <img style={{animation: `spin ${this.state.speed}s linear infinite`}} src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="asfsa"/>
                </div>
            </main>
        </>
    );
}