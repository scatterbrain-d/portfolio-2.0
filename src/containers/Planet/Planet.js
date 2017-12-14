import React from 'react';

const planet = (props) => {
    return (
        <div id={props.containerId} className="wobble">
            <div 
                className="turntable"
                style={{transform: props.spin ? "rotate(180deg)" : "rotate(0deg)"}}
            >
                {props.children}
                <div 
                    id={props.planetId} 
                    className="planet"
                    onMouseOver={props.mouseOver}
                    onMouseOut={props.mouseOut}
                    onClick={props.clicked}
                >
                </div>
            </div>
            <img className="flag" 
            src={props.img} alt=""
            style={{transform: props.spin ? "translateY(-65%)" : "translateY(0%)"}}
            />
        </div>
    );
}

export default planet;