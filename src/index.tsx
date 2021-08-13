/* Some bundler-related duties of the main file */
import "./styles/index.scss";
/*------------------------------*/

import React from "react";
import {render} from "react-dom";

const container = document.getElementById("app-start-container");

import BaseComponentLibrary from "./base-components/index";

const App = () => {
    return (
        <div id="battle-line">
            <h1>Battle Line</h1>
            <BaseComponentLibrary />
        </div>
    )
};

render(<App />, container);

