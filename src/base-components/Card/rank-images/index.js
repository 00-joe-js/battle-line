/* Image imports via Parcel */
import champ from "./champ.png";
/*--------------------------*/

const rankToUrlMapping = {
    "9": champ
};

export default rank => {
    const imageAsset = rankToUrlMapping[rank.toString()];
    if (!imageAsset) throw new Error("Unknown rank input");
    return imageAsset;
}