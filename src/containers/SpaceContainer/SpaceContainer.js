import React, { Component } from 'react';
import Planet from "../../components/Planet/Planet";
import Content from "../../components/Content/Content";

import {planetArray} from "../../assets/planetArray"
import {contentArray} from "../../assets/contentArray"

let modal;

class SpaceContainer extends Component {
    
    state = {
        left: true,
        modal: false,
        spin: {
            about: false,
            builder: false,
            chronicle: false,
            contact: false,
            farm: false,
            sun: false,
            wok: false
        }
    }
    
    mouseOverHandler(planetId) {
        switch (planetId) {
            case("about"): return this.setState({spin: {about: true}})
            case("builder"): return this.setState({spin: {builder: true}})
            case("chronicle"): return this.setState({spin: {chronicle: true}})
            case("contact"): return this.setState({spin: {contact: true}})
            case("farm"): return this.setState({spin: {farm: true}})
            case("sun"): return this.setState({spin: {sun: true}})
            case("wok"): return this.setState({spin: {wok: true}})
            default: console.log("fix me!")
        }
    }
    
    mouseOutHandler(planetId) {
        switch (planetId) {
            case("about"): return this.setState({spin: {about: false}})
            case("builder"): return this.setState({spin: {builder: false}})
            case("chronicle"): return this.setState({spin: {chronicle: false}})
            case("contact"): return this.setState({spin: {contact: false}})
            case("farm"): return this.setState({spin: {farm: false}})
            case("sun"): return this.setState({spin: {sun: false}})
            case("wok"): return this.setState({spin: {wok: false}})
            default: console.log("fix me!")
        }
    }
    
    clickHandler(planetId) {
        if (planetId === "sun")
            this.setState({left: !this.state.left})
        else {
            
            const content = contentArray.find((entry) => entry.name === planetId);
            modal = (
                    <Content
                        name={content.name}
                        fontClass={content.fontClass}
                        title={content.title}
                        website={content.website}
                        github={content.github}
                        body={content.body}
                        clicked={this.modalHandler}
                    />
            )
            this.setState({modal: true});
        }
    }
    
    modalHandler = () => {
        modal = "";
        this.setState({modal: false});
    }
    
    
    render() {
        
        planetArray[0].spin = this.state.spin.about;
        planetArray[1].spin = this.state.spin.builder;
        planetArray[2].spin = this.state.spin.chronicle;
        planetArray[3].spin = this.state.spin.contact;
        planetArray[4].spin = this.state.spin.farm;
        planetArray[5].spin = this.state.spin.sun;
        planetArray[6].spin = this.state.spin.wok;
        
        return (
            <div className="container"
                style={{transform: this.state.left ? "translateX(0%)" : "translateX(-50%)"}}
            >
                {planetArray.map(planet => (
                        <Planet
                            key={planet.containerId}
                            containerId={planet.containerId}
                            planetId={planet.planetId}
                            mouseOver={() => this.mouseOverHandler(planet.containerId)}
                            mouseOut={() => this.mouseOutHandler(planet.containerId)}
                            clicked={() => this.clickHandler(planet.containerId)}
                            img={planet.img}
                            spin={planet.spin}
                        >
                            {planet.children}
                        </Planet>
                    )
                )}
                <div id="blurb" style={{zIndex: this.state.modal ? 1 : -1}}>
                    {modal}
                </div>
            </div>
        );
    }
}

export default SpaceContainer;