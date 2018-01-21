import React from "react";

import iceland from "./images/iceland.jpg";
import chronicle from "./images/chronicles.png";
import farm from "./images/lilyfarm.png";
import wok from "./images/wok.png";

export const contentArray = [
    {
        name: "about",
        fontClass: "roboto-content",
        title: "About Me",
        website: "https://www.linkedin.com/in/afinnelldesign/",
        github: "https://github.com/scatterbrain-d",
        body: (
            <div>
                <img src={iceland} alt=""/>
                <p>
                    Hello and welcome! I'm a self-taught full-stack web developer living Austin, Texas.
                    Programming has been a hobby of mine for a while, and now I'm ready
                    to take the plunge into the professional web dev world. I posses the following
                    skills:
                </p>
                <ul>
                    <li>Javascript/ES6</li>
                    <li>CSS3, Bootstrap, Semantic UI, etc.</li>
                    <li>Node.js with Express</li>
                    <li>EJS/JSX templates</li>
                    <li>React, Angular, Vue, Redux</li>
                    <li>MongoDB/SQL</li>
                    <li>Mobile-ready layouts with CSS grid/flexbox</li>
                    <li>Creative/artistic design</li>
                </ul>
                <p>
                    Other hobbies include hiking, reading, sculpture, D&D and other tabletop games,
                    cooking, movies, and spending time with my beautiful wife and daughter!
                </p>
                <p>
                    Want to know more? Feel free to check out the links below or <a href="mailto:andy.finnell@gmail.com">email me!</a>
                </p>
            </div>    
        )
    },
    {   
        name: "builder",
        fontClass: "roboto-content",
        title: "Monster Builder",
        website: "",
        github: "https://github.com/scatterbrain-d/monster-builder",
        body: (
            <div>
                <h2>(under construction)</h2>
                <p>
                    Another tool for my D&D group, this app creates custom
                    monsters for use in games.
                </p>
                <ul>
                    <li>Single page format with React</li>
                    <li>State management via Redux</li>
                    <li>Responsive layout with CSS grid</li>
                    <li>Form validation</li>
                    <li>CSS modules</li>
                    <li>User authentication via Firebase</li>
                    <li>Database to save creations via Firebase</li>
                </ul>
                <p>Future updates will add:</p>
                <ul>
                    <li>Ability to share creations with others</li>
                    <li>"Battle mode" for use during a game</li>
                </ul>
                <hr/>
            </div>
        )
    },
    {
        name: "chronicle",
        fontClass: "chronicle-content",
        title: "D&D Chronicles",
        website: "https://dnd-chronicles.herokuapp.com/sessions",
        github: "https://github.com/scatterbrain-d/dnd-chronicles",
        body: (
            <div>
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
            </div>
        )
    },
    {
        name: "contact",
        fontClass: "roboto-content",
        title: "Contact Info",
        website: "",
        github: "",
        body: (
            <div>
                <p><strong>
                    Contact me by <a href="mailto:andy.finnell@gmail.com">email</a>, 
                    or send me a message with the form below.
                </strong></p>
                <hr/>
                <form action="https://formspree.io/andy.finnell@gmail.com" method="POST">
                    <div>
                        <label id="name">Name: </label>
                        <input id="name" type="text" name="name"/>
                    </div>
                    <div>
                        <label id="email">Email: </label>
                        <input id="email" type="email" name="email"/>
                    </div>
                    <div>
                        <label id="company">Company: </label>
                        <input id="company" type="text" name="compnay"/>
                    </div>
                        <label id="message">Message: </label>
                        <textarea name="content"></textarea>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>    
        )
    },
    {
        name: "farm",
        fontClass: "roboto-content",
        title: "",
        website: "http://farm.afinnell.com",
        github: "https://github.com/scatterbrain-d/lilys-farm",
        body: (
            <div>
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
            </div>
        )
    },
    {
        name: "wok",
        fontClass: "roboto-content",
        title: "Wok of the Falls",
        website: "http://wok.afinnell.com",
        github: "https://github.com/scatterbrain-d/wokofthefalls",
        body: (
            <div>
                <a href="http://wok.afinnell.com">
                    <img src={wok} alt=""/></a>
                <p>
                    I designed this website for a friend's family restaurant.
                    I worked with the client to design a site that met their
                    requirements and expectations. Mobile-first responsive
                    design and a single-page design using React keeps the site
                    flexible and quick.
                </p>
                <ul>
                    <li>Modular design with React</li>
                    <li>Responsive layout</li>
                    <li>Selective component routing</li>
                    <li>Image slider and other custom styling</li>
                </ul>
                <hr/>
            </div>
        )
    }
];