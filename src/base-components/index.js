import React from "react";
import MilitaryCard from "./Card";

export default () => {
    return (
        <div id="base-component-library">
            <h4>Some base components</h4>
            <div>
                <h2>Cards</h2>
                <div>
                    <div><MilitaryCard rank={"9"} /></div>
                </div>
            </div>
        </div>
    )
}