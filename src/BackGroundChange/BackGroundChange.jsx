import React, { useReducer, useState } from "react";
import { mychangeColor } from "./BackGroundChange";
export const BackGroundChange = () => {
    const [input, setInput] = useState("");
    const [color, dispatch] = useReducer(mychangeColor, "blue");
    const style = {
        padding: "12px 36px",
        margin: "4px",
        borderRadius: "18px",
        border: "none",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor:[color],
        border:"4px solid black",
    };
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "800px",
                    backgroundColor: [color],
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "30px",
                }}>
                    <button
                        onClick={() => {
                            dispatch({ type: "blue" });
                        }}
                        style={style}
                    >
                        {" "}
                        Blue{" "}
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "black" });
                        }}
                        style={style}
                    >
                        {" "}
                        Black{" "}
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "red" });
                        }}
                        style={style}
                    >
                        {" "}
                        Red{" "}
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "yellow" });
                        }}
                        style={style}
                    >
                        {" "}
                        Yellow{" "}
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "random" });
                        }}
                        style={style}
                    >
                        {" "}
                        Random{" "}
                    </button>

                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <input
                         style={{padding: "12px 42px", margin: "4px", borderRadius: "18px", border: "1px solid black" , fontSize: "16px" , color: "black"}}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        type="text"
                    />
                    <button
                        onClick={() => {
                            dispatch({ type: "inputText", payload: input });
                        }}
                        style={style}
                    >
                        Change Color{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};
