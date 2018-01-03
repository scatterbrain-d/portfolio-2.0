import React, { Component } from 'react';
import SpaceContainer from "./containers/SpaceContainer/SpaceContainer";
import sig from "./assets/images/sig.png";

class App extends Component {
    render() {
        return (
            <div>
                <div id="sig">
                    <img src={sig} alt="logo"/><span>design</span>
                </div>
                <SpaceContainer/>
            </div>
        );
    }
}

export default App;