/* Image imports via Parcel */
import champ from "../../../../elissa-assets/card-prototypes/champ-rank-5.jpg";
import collector from "../../../../elissa-assets/card-prototypes/collector-rank-8.jpg";
import heart from "../../../../elissa-assets/card-prototypes/heart-rank-10.jpg";
import darkling from "../../../../elissa-assets/card-prototypes/darkling-rank-4.jpg";
import donudeca from "../../../../elissa-assets/card-prototypes/donu-deca-rank-2.jpg";
import sentries from "../../../../elissa-assets/card-prototypes/sentries-rank-3.jpg";
import shieldspear from "../../../../elissa-assets/card-prototypes/shield-spear-rank-9.jpg";
import repto from "../../../../elissa-assets/card-prototypes/reptomancer-rank-7.jpg";
import gremnob from "../../../../elissa-assets/card-prototypes/gremlin-nob-rank-1.jpg";
import hexaghost from "../../../../elissa-assets/card-prototypes/hexaghost-rank-6.jpg";
/*--------------------------*/

const rankToUrlMapping = {
    "1": gremnob,
    "2": donudeca,
    "3": sentries,
    "4": darkling,
    "5": champ,
    "6": hexaghost,
    "7": repto,
    "8": collector,
    "9": shieldspear,
    "10": heart
};

export default rank => {
    const imageAsset = rankToUrlMapping[rank.toString()];
    if (!imageAsset) throw new Error("Unknown rank input");
    return imageAsset;
}