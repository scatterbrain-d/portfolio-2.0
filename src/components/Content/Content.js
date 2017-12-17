import React from "react";

const content = (props) => {
    
    let website;
    let github = (
        <a href={props.github}>
            <button>Github</button>
        </a>
    );
    
    switch(props.name) {
        case("contact"): 
            website = "";
            github = "";
        break;
        case("about"): 
            website = (
                <a href={props.website}>
                    <button>LinkedIn</button>
                </a>
            );
        break;
        case("builder"): 
            website = "";
        break;
        default: {
            website = (
                <a href={props.website}>
                    <button>Website</button>
                </a>
            );
        }
        
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