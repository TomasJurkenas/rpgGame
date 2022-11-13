import React, {useState} from "react";
import {Link} from "react-router-dom";
import{ToggleButton, ToggleButtonGroup} from "@mui/material";
import './mainMenu.css';
import './spinMenu';

// issirinkti veikeja
export function MainMenu (){
    const[show, setShow]=useState(false);
    const onClick = () => {
        setShow(!show);
    };


  //3js veikejo ft
    return(
        <>
            <h1>Dungeon Crawler</h1>



            <nav>
                <Link to="/mainMenu">Home</Link>
                <Link to="/contacts"> Contacts</Link>
            </nav>
            <main>
                <div className={"lore-stat"}> about and stat
                    <nav>
                        <ToggleButtonGroup
                            color="primary"
                            exclusive
                            onClick={onClick}
                            aria-label="Large sizes"
                        >
                            <ToggleButton  value="lore">Lore</ToggleButton>
                            <ToggleButton  value="stat">Stats</ToggleButton>
                        </ToggleButtonGroup>
                    </nav>
                    { !show ?
                        <p>asfsfsafasf</p> : null }


                    { show ?
                        <p>451451414512151515</p> : null }

                </div>
                <div> veikejo ft
                <img  src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="asfsa"/>
                </div>
            </main>
        </>
    );
}

// {{animation: `spin ${this.state.speed}s linear infinite`}}