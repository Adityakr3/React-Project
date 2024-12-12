// import React from "react";
// // import { CountContextWrapper } from "./countContext";
// // import { StudentContextWrapper } from "./studentContext";

import ClassBasedLifeCycle from "./components/ClassBasedLifeCycle";

// import "./index.css"
// // import Child1 from "./Child1";
// // import UseReducerHook from "./useReducer/UseReducerHook";
// import Game from "./Moving Game/Game";
// import { BackGroundChange } from "./BackGroundChange/BackGroundChange.jsx";
// import LandingPage from "./LandingPage/LandingPage.jsx";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Signup from "./LandingPage/signUp.jsx";
// import Career from "./LandingPage/Career.jsx";
// import About from "./LandingPage/About.jsx";
// import Product from "./components/Product.jsx";
const App = () => {

   const NavStyle = {
      color: "white"
   }
   return (
      <ClassBasedLifeCycle address="banglore"/>
      // <BrowserRouter>
      //    <div className="Nav">
      //    </div>
      //    <Routes>
      //       <Route path="background" element={<BackGroundChange />} >
      //          <Route path="career" element={<Career />} />
      //          <Route path="about" element={<About />} />
      //       </Route>
      //       <Route path="/" element={<LandingPage />} />
      //       <Route path="/Game" element={<Game />}/>
      //       <Route path="/sign" element={<Signup />} />
      //       <Route path="/product/:id" element={<Product/>} />
      //    </Routes>
      // </BrowserRouter>

   );
};

export default App;
