import React from "react";

const farm = (props) => {
    return (
        <div id="farm">
            <div 
                className="turntable"
                style={{transform: props.show ? "rotate(0deg)" : "rotate(180deg)"}}
            >
                <p id="a3">F</p>
                <p id="a4">A</p>
                <p id="a5">R</p>
                <p id="a6">M</p>
                <div id="farmon" className="planet">
                    
                </div>
            </div>
            <img className="flag" 
            src="../../assets/images/barn.png" alt="barn"
            style={{transform: props.show ? "translateY(0)" : "translateY(-65%)"}}
            />
        </div>
    );
};

export default farm;