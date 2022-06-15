import { ASSET_PATH } from "../pathDefs";

//give the function a json Object and it will parse it and load in any scene objects dynamically given the specifications of the object

export function sceneObjectPreLoader(jsonAssetArray, loader) {
  jsonAssetArray.forEach((asset) => {
    if (asset.type === "img") {
      loader.image(asset.name, `${ASSET_PATH}/${asset.filename}`);
    } else if (asset.type === "audio") {
      loader.audio(asset.name, `${ASSET_PATH}/${asset.filename}`);
    }
  });
}
