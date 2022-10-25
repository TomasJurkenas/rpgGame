import React from "react";
import {Background} from "./components/intro";
import {MainMenu} from "./components/mainMenu";
import {Menu} from "./components/menu";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
      <MainMenu/>
        {/*<Routes>*/}

        {/*    /!*<Route path="/" element ={<Menu/>}/>*!/*/}
        {/*    <Route path="/" element={<MainMenu/>}/>*/}
        {/*    /!*<Route path="/Menu" element={<Menu/>}></Route>*!/*/}
        {/*</Routes>*/}
      </>
  );
}
// router alternatives
export default App;
