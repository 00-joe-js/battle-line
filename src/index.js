/* Some bundler-related duties of the main file */
import "./styles/index.scss";
/*------------------------------*/


import React from "react";
import {render} from "react-dom";

const container = document.getElementById("app-start-container");

render(<h1>Battle Line</h1>, container);

