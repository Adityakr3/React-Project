import React from "react";
import { useState } from "react";
import "./Game.css";

const Game = () => {
    const [vertical, setVertical] = useState(0);
    const [horizontal, setHorizontal] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "396px",
                position: "relative",
            }}
        >
            {/* The moving box */}
            <div
                className="box"
                style={{
                    position: "absolute",
                    top: vertical + "px",
                    left: horizontal + "px",
                    width: "150px", // Specify a size for the box
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    transition: "all 0.5s ease",
                }}
            ></div>


            <div
                className="btnBox1"
                style={{
                    width: "355px",
                    height: "155px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    marginTop: "555px",
                }}
            >


                <button 
                    className="btn"
                    onClick={() => {
                        setHorizontal(horizontal - 155); // Move left
                    }}
                >
                    Left
                </button>

                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "115px",
                    }}
                >
                    {/* Down button */}
                    <button
                     className="btn"
                        onClick={() => {
                            setVertical(vertical - 155); // Move up
                        }}
                    >
                        Up
                    </button>
                    <button
                     className="btn"
                        onClick={() => {
                            setVertical(vertical + 155); // Move down
                        }}
                    >
                        Down
                    </button>

                    {/* Left button */}


                </div>

                {/* Right button */}
                <button
                 className="btn"
                    onClick={() => {
                        setHorizontal(horizontal + 155); // Move right
                    }}
                >
                    Right
                </button>
            </div>
        </div>
    );
};

export default Game;
