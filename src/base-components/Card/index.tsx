import React from "react";
import getImageUrlByRank from "./rank-images";

export default ({ rank, color }) => {
    return (
        <div className="military-unit-card">
            <div className={`color-border ${color}`} />
            <img src={getImageUrlByRank(rank)} />
        </div>
    );
};