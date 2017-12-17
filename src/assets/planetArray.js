import React from "react";

import flag from "./images/flag.png";
import dragon from "./images/dragon.png";
import tower from "./images/tower.png";
import barn from "./images/barn.png";
import bowl from "./images/bowl.png";

export const planetArray = [
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
        spin: ""
    },
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
        spin: ""
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
        spin: ""
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
        spin: ""
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
        spin: ""
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
        spin: ""
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
        spin: ""
    }
];