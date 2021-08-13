import React from "react";
import MilitaryCard from "./Card";

export default () => {
    return (
        <div id="base-component-library">
            <h4>Some base components</h4>
            <div>
                <h2>Cards</h2>
                <div id="cards">
                    {(new Array(10).fill("").map((_, i) => {
                        return <MilitaryCard key={i} color="red" rank={String(i+1)} />;
                    }))}
                </div>
            </div>
        </div>
    )
}