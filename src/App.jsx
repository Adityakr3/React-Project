import React from "react";
// import { CountContextWrapper } from "./countContext";
// import { StudentContextWrapper } from "./studentContext";

import "./index.css"
// import Child1 from "./Child1";
// import UseReducerHook from "./useReducer/UseReducerHook";
import Game from "./Moving Game/Game";
import { BackGroundChange } from "./BackGroundChange/BackGroundChange.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Signup from "./LandingPage/signUp.jsx";
const App = () => {

   const NavStyle = {
      color: "white"
   }
   return (
      <BrowserRouter>
        <div className="Nav">
        </div>
         <Routes>
            <Route path="/background" element={<BackGroundChange />} ></Route>
            <Route path="/" element={<LandingPage />} ></Route>
            <Route path="/Game" element={<Game />} ></Route>
            <Route path="/sign" element={<Signup />} ></Route>
         </Routes>
      </BrowserRouter>

   );
};

export default App;
