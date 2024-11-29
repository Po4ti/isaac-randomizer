import { UnlockType } from "../enums/UnlockType";
import type { UnlockSubType, UnlockVariant } from "../classes/Unlock";
import { mod } from "../mod";
import { Challenge, type PlayerType } from "isaac-typescript-definitions";
import { UnlockData } from "../classes/UnlockData";
import type { StartingCharacters } from "../enums/BaseGame";

const v = {
  persistent: {
    unlockData: new UnlockData(),
  },
};

export function UnlockAchievement(unlockType: UnlockType, unlockVariant: UnlockVariant, unlockSubType: UnlockSubType): void {
  v.persistent.unlockData.SetValue(unlockType, unlockVariant, unlockSubType, true);
}

export function GetUnlockedChallenges(): Challenge[] {
  const allChallenges: Map<Challenge, boolean> = v.persistent.unlockData.GetChallengesStatus();
  let unlockedChallenges: Challenge[] = [];
  allChallenges.forEach((isUnlocked, challenge) => {
    if(isUnlocked) {
      unlockedChallenges.push(challenge);
    }
  });

  return unlockedChallenges;
}

export function GetUnlockedCharacters(): PlayerType[] {
  const allCharacters: Map<StartingCharacters, boolean> = v.persistent.unlockData.GetCharactersStatus();
  let unlockedCharacters: PlayerType[] = [];
  allCharacters.forEach((isUnlocked, character) => {
    if(isUnlocked) {
      unlockedCharacters.push(character as unknown as PlayerType);
    }
  });

  return unlockedCharacters;
}

mod.saveDataManager("unlockdata", v);