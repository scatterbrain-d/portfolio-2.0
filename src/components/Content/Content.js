import React from "react";

const content = (props) => {
    
    let website = (
            <a href={props.website}>
                <button>Website</button>
            </a>
        );
    let github = (
            <a href={props.github}>
                <button>Github</button>
            </a>
        );
        
    if (props.name === "contact") {
        website = "";
        github = "";
    }
    
    if (props.name === "about") {
        website = (
            <a href={props.website}>
                <button>LinkedIn</button>
            </a>
        );
    }
    
    return (
        <div className={props.fontClass + " content"}>
            <h2>{props.title}</h2>
            {props.body}
            {website}
            {github}
            <button className="close" onClick={props.clicked}>Close</button>
        </div>
    );
};

export default content;