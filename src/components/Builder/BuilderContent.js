import React from "react";

const builderContent = (props) => {
    return (
        <div className="roboto-content content">
            <h2>Monster Builder</h2>
            <h2>(under construction)</h2>
            <p>
                Another tool for my D&D group, this app creates custom
                monsters for use in games.
            </p>
            <ul>
                <li>Single page format with React</li>
                <li>State management via Redux</li>
                <li>Responsive layout with CSS grid</li>
            </ul>
            <p>Future updates will add:</p>
            <ul>
                <li>User authentication</li>
                <li>Backend architecture with a database to save creations</li>
                <li>Ability to share creations with others</li>
                <li>"Battle mode" for use during a game</li>
            </ul>
            <hr/>
            <a href="https://github.com/scatterbrain-d/monster-builder">
                <button>Github</button>
            </a>
            <button className="close" onClick={props.clicked}>Close</button>
        </div>
    );
}

export default builderContent;