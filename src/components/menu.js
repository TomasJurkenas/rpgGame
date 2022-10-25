import React, {useState} from "react";
import './menu.css'

export function Menu() {
    const [show, setShow]=useState(false)
    const[burger_class,setBurgerClass]=useState("burger-bar unclicked")
    const [menu_class, setMenuClass]=useState(" menu hidden")
    const [isMenuClicked, setMenuClicked]= useState(false)

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setMenuClicked(!isMenuClicked)
    }
    return(
       <div>
        <div style={{width:'100%',height:'80px' }} >
            <nav>
                <div className={"burger-menu"} onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <button>Home</button>
                <button onClick={()=>setShow(true)} >log in</button>
                <button >contact</button>
            </div>
        </div>


           {show?<form action={"../php/login.php"} method={"post"}>
               <label>Login</label>
               <input type="text" name="Login" ></input>
               <label>Password</label>
               <input type="text" name="Password"></input>
                   <input type="submit" value="Submit"/>
           </form>
         :null }
       </div>
    )


}