import React, { Component } from 'react';
import SpaceContainer from "./containers/SpaceContainer/SpaceContainer";
import sig from "./assets/images/sig.png";

class App extends Component {
    render() {
        return (
            <div>
                <img id="sig" src={sig} alt="logo"/>
                <SpaceContainer/>
            </div>
        );
    }
}

export default App;