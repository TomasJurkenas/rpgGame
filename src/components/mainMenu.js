import React, {useState, useEffect, useLayoutEffect} from "react";
import {Link} from "react-router-dom";
import './mainMenu.css';
import './spinMenu';

// issirinkti veikeja
export function MainMenu (){
    const [spin, setSpin]=useState(0);
    const[ constructorWork, setConstructorWork]= useState(false);
    const[show, setShow]=useState(true);

    const toggleShow = () => { setShow(value => !value);

    }

    useEffect(()=>{
        console.log()
    },[])

    useLayoutEffect(()=>{
       console.log()
    },[])

    const constructor = () =>{
        if(constructorWork)return;
        console.log();
        setConstructorWork(true)


    }
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         speed: 3
    //     }
    // }
// damusti sita
  if(setShow(true)){
      return true;
  }
    return(
        <>
            <h1>Dungeon Crawler</h1>
            <nav>
                <Link to="/mainMenu">Home</Link>
                <Link to="/contacts"> Contacts</Link>
            </nav>
            <main>
                <div className={"lore-stat"}>about and stat
                    <nav>
                        <button onClick={()=>setShow(true)} className={"Lore"} >
                            senai senai
                        </button>
                        <button onClick={()=>setShow(false)} className={"stat"}>
                            1 21  5 5 513 555
                        </button>
                    </nav>
                    {
                        // show?<p>asfsfsafasf</p>:null;
                        !show?<p>asfsaggggggggggggggggggg</p>:null
                    }
                </div>
                <div> veikejo ft
                <img style={{animation: spin}} src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="asfsa"/>
                </div>
            </main>
        </>
    );
}

// {{animation: `spin ${this.state.speed}s linear infinite`}}