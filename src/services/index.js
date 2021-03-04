
export const checkImgPath = (img) => img.substring(0, 4) === "http" ? img : require("../assets/projects/"+img).default;