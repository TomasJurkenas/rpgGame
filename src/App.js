import React from "react";
import {Background} from "./components/intro";
import {mainMenu} from "./components/mainMenu";
import {Menu} from "./components/menu";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element ={<Menu/>}/>
            {/*<Route path="/mainMenu" element={<mainMenu/>}/>*/}
        <Menu/>
        </Routes>
    </div>
  );
}
// router alternatives
export default App;
