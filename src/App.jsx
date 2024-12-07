import React from "react";
// import { CountContextWrapper } from "./countContext";
// import { StudentContextWrapper } from "./studentContext";

import "./index.css"
// import Child1 from "./Child1";
// import UseReducerHook from "./useReducer/UseReducerHook";

import DynamicForm from "./DynamicForm/DynamicForm";
import Game from "./Moving Game/Game";
// import Game from "./Moving Game/Game";

import {BackGroundChange} from "./BackGroundChange/BackGroundChange.jsx";


const App = () => {
  return (
   <>
    {/* <Child1/>
    <UseReducerHook/> */}
    {/* <Game/> */}
    <DynamicForm/>
    {/* <BackGroundChange/> */}
   </>
  );
};

export default App;
