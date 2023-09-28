//give the function a json Object and it will parse it and load in any scene objects dynamically given the specifications of the object
import { PATHS } from "../pathDefs";

export function sceneObjectPreLoader(jsonAssetArray, loader) {
  jsonAssetArray.forEach((asset) => {
    console.log(PATHS[asset.path]);
    if (asset.type === "img") {
      loader.image(asset.name, `${PATHS[asset.path]}/${asset.filename}`);
    } else if (asset.type === "audio") {
      loader.audio(asset.name, `${PATHS[asset.path]}/${asset.filename}`);
    }
  });
}
