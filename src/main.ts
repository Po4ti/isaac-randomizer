import { CardType, Challenge, Keyboard, ModCallback } from "isaac-typescript-definitions";
import { name } from "../package.json";
import { ISCFeature, jsonEncode, upgradeMod } from "isaacscript-common";
import { GetUnlockedChallenges, UnlockAchievement, } from "./saves/savefile";
import { UnlockType } from "./enums/UnlockType";
import { UnlockVariant, UnlockSubType } from "./classes/Unlock";
import { mod } from "./mod";
import { AchievementData, generateAchievementData } from "./classes/Achievement";
import { UnlockData } from "./classes/UnlockData";



export function main(): void {

  Isaac.DebugString(`${name} initialized.`);

  mod.saveDataManagerSave();
  mod.setConditionalHotkey(() => Keyboard.D, debugTrigger);

}


function debugTrigger() {
  generateAchievementData();
  Isaac.ConsoleOutput("text")
  mod.saveDataManagerSave();

  let challenges = GetUnlockedChallenges();
  Isaac.ConsoleOutput(challenges.length.toString());
}