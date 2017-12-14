import React from "react";
import chronicle from "../../assets/images/chronicles.png";

const chronicleContent = (props) => {
    return (
        <div id="chronicle-content" className="content">
            <h2>D&D Chronicles</h2>
            <a href="https://dnd-chronicles.herokuapp.com/sessions">
                <img src={chronicle} alt=""/>
            </a>
            <p>
                Designed to document an ongoing Dungeons and Dragons campaign,
                this full stack application combines a blog template with a character
                repository. Responsive design facilitates use on mobile devices.
            </p>
            <ul>
                <li>Node.js back end</li>
                <li>Express framework</li>
                <li>RESTful routing</li>
                <li>EJS templates</li>
            </ul>
            <ul>
                <li>Two linked MongoDB databases</li>
                <li>Bootstrap and custom css</li>
                <li>Responsive layout</li>
                <li>Modular file system</li>
            </ul>
            <hr/>
            <a href="https://dnd-chronicles.herokuapp.com/sessions">
                <button>Website</button>
            </a>
            <a href="https://github.com/scatterbrain-d/dnd-chronicles">
                <button>Github</button>
            </a>
            <button className="close" onClick={props.clicked}>Close</button>
        </div>
    );
};

export default chronicleContent;