import React, { Component } from 'react';
import Planet from "../Planet/Planet";

import AboutContent from "../../components/About/AboutContent";
import BuilderContent from "../../components/Builder/BuilderContent";
import ChronicleContent from "../../components/Chronicle/ChronicleContent";
import ContactContent from "../../components/Contact/ContactContent";
import FarmContent from "../../components/Farm/FarmContent";
import WokContent from "../../components/Wok/WokContent";

import flag from "../../assets/images/flag.png";
import dragon from "../../assets/images/dragon.png";
import tower from "../../assets/images/tower.png";
import barn from "../../assets/images/barn.png";
import bowl from "../../assets/images/bowl.png";



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
            switch (planetId) {
                case("about"): modal = <AboutContent clicked={this.modalHandler}/>; break;
                case("builder"): modal = <BuilderContent clicked={this.modalHandler}/>; break;
                case("chronicle"): modal = <ChronicleContent clicked={this.modalHandler}/>; break;
                case("contact"): modal = <ContactContent clicked={this.modalHandler}/>; break;
                case("farm"): modal = <FarmContent clicked={this.modalHandler}/>; break;
                case("wok"): modal = <WokContent clicked={this.modalHandler}/>; break;
                default: console.log("fix me!")
            }
            this.setState({modal: true});
        }
    }
    
    modalHandler = () => {
        modal = "";
        this.setState({modal: false});
    }
    
    
    render() {
        

        
        const planetArray = [
                {
                    containerId: "about",
                    planetId: "aboutPlanet",
                    img: flag,
                    children: (
                        <div className="arc">
                            <p id="a1">A</p><p id="a2">B</p><p id="a3">O</p><p id="a4">U</p>
                            <p id="a5">T</p><p id="a7">M</p><p id="a8">E</p>
                        </div>
                        ),
                    spin: this.state.spin.about
                },
                {
                    containerId: "builder",
                    planetId: "builderPlanet",
                    img: "",
                    children: (
                        <div className="arc">
                            <p id="c1">B</p><p id="c2">U</p><p id="c3">I</p><p id="c4">L</p>
                            <p id="c5">D</p><p id="c6">E</p><p id="c7">R</p>
                        </div>
                        ),
                    spin: this.state.spin.builder
                },
                {
                    containerId: "chronicle",
                    planetId: "chroniclePlanet",
                    img: dragon,
                    children: (
                        <div className="arc">
                            <p id="c0">C</p><p id="c1">H</p><p id="c2">R</p><p id="c3">O</p><p id="c4">N</p>
                            <p id="c5">I</p><p id="c6">C</p><p id="c7">L</p><p id="c8">E</p>
                        </div>
                        ),
                    spin: this.state.spin.chronicle
                },
                {
                    containerId: "contact",
                    planetId: "contactPlanet",
                    img: tower,
                    children: (
                        <div className="arc">
                            <p id="c1">C</p><p id="c2">O</p><p id="c3">N</p><p id="c4">T</p>
                            <p id="c5">A</p><p id="c6">C</p><p id="c7">T</p>
                        </div>
                        ),
                    spin: this.state.spin.contact
                },
                {
                    containerId: "farm",
                    planetId: "farmPlanet",
                    img: barn,
                    children: (
                        <div className="arc">
                            <p id="a3">F</p><p id="a4">A</p><p id="a5">R</p><p id="a6">M</p>
                        </div>
                        ),
                    spin: this.state.spin.farm
                },
                {
                    containerId: "sun",
                    planetId: "sunStar",
                    img:"",
                    children: (
                        <div className="arc">
                            <p id="p1">P</p><p id="p2">R</p><p id="p3">O</p><p id="p4">J</p>
                            <p id="p5">E</p><p id="p6">C</p><p id="p7">T</p><p id="p8">S</p>
                            <p id="p9">></p>
                        </div>
                        ),
                    spin: this.state.spin.sun
                },
                {
                    containerId: "wok",
                    planetId: "wokPlanet",
                    img: bowl,
                    children: (
                        <div className="arc">
                            <p id="c3">W</p><p id="c4">O</p><p id="c5">K</p>
                        </div>
                        ),
                    spin: this.state.spin.wok
                }
            ]
        
        return (
            <div 
                className="container"
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
                <div id="blurb"
                    style={{zIndex: this.state.modal ? 1 : -1}}
                >
                    {modal}
                </div>
            </div>
        );
    }
}

export default SpaceContainer;