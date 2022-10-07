import React, {useState} from "react";
import './meniu.css'

export function Meniu() {
    const [show, setShow]=useState(false)
    return(
       <div>
           <nav>
               <button>Home</button>
               <button >Register</button>
               <button onClick={()=>setShow(true)}>Login</button>
           </nav>

           {show?<form>
               <label>Name</label>
               <input></input>
               <label>Password</label>
               <input></input>
           </form>
         :null }
       </div>
    )


}