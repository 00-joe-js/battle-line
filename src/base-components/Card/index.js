import React from "react";
import getImageUrlByRank from "./rank-images";

export default ({ rank }) => {
    return (
        <div className="military-unit-card">
            <section className="mu_top-section">
                <div className="mu_rank">
                    <h4>{rank}</h4>
                </div>
            </section>
            <section className="mu_image-section">
                <img src={getImageUrlByRank(rank)} />
            </section>

            <section className="mu_bottom-container">

            </section>
        </div>
    );
};