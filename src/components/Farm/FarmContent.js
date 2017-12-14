import React from "react";
import farm from "../../assets/images/lilyfarm.png";

const farmContent = (props) => {
    return (
        <div className="roboto-content content">
            <h2 id="farm-content">Lily's Farm</h2>
            <a href="http://farm.afinnell.com">
                <img src={farm} alt=""/>
            </a>
            <p>
                I designed this game for my two-year-old daughter.
                Colorful animals move across the screen and react when
                clicked or touched. Modular design allows easy addition
                and variation to featured animals. Background and animal
                design provided by my lovely and talented wife.
            </p>
            <ul>
                <li>Responsive layout</li>
                <li>Dynamic DOM element creation</li>
                <li>Animation with CSS</li>
                <li>Difficulty settings</li>
            </ul>
            <hr/>
            <a href="http://farm.afinnell.com">
                <button>Website</button>
            </a>
            <a href="https://github.com/scatterbrain-d/lilys-farm">
                <button>Github</button>
            </a>
            <button className="close" onClick={props.clicked}>Close</button>
        </div>
    );
};

export default farmContent;