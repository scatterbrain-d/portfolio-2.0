import React from "react";
import wok from "../../assets/images/wok.png";

const wokContent = (props) => {
    return (
        <div className="roboto-content content">
            <h2>Wok of the Falls</h2>
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
            <a href="http://wok.afinnell.com">
                <button>Website</button>
            </a>
            <a href="https://github.com/scatterbrain-d/wokofthefalls">
                <button>Github</button>
            </a>
            <button className="close" onClick={props.clicked}>Close</button>
        </div>
    );
};

export default wokContent;