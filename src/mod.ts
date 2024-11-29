import { name } from "../package.json";
import { ISCFeature, upgradeMod } from "isaacscript-common";

const modVanilla = RegisterMod(name, 1);
const features = [ISCFeature.SAVE_DATA_MANAGER,
                  ISCFeature.CUSTOM_HOTKEYS] as const;

export const mod = upgradeMod(modVanilla, features);