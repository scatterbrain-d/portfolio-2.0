import React from "react";

const sun = (props) => {
    return (
        <div id="center" className="wobble">
            <div 
                className="turntable"
                style={{transform: props.spin ? "rotate(180deg)" : "rotate(0deg)"}}
            >
                <p id="p1">P</p>
                <p id="p2">R</p>
                <p id="p3">O</p>
                <p id="p4">J</p>
                <p id="p5">E</p>
                <p id="p6">C</p>
                <p id="p7">T</p>
                <p id="p8">S</p>
                <p id="p9">></p>
                <div id="sun" 
                    className="planet"
                    onClick={props.clicked}    
                ></div>
            </div>
        </div>
    );
};

export default sun;