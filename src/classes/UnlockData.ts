import type { Challenge, PlayerType } from "isaac-typescript-definitions";
import { CHALLENGES, CHARACTERS } from "../enums/enumRecords";
import { UnlockType } from "../enums/UnlockType";
import type { UnlockSubType, UnlockVariant } from "./Unlock";
import type { StartingCharacters } from "../enums/BaseGame";

type UnlockMap = Map<UnlockType, Map<UnlockVariant, Map<UnlockSubType, boolean>>>;

export class UnlockData {
  data: UnlockMap = new Map();

  GetValue(unlockType: UnlockType, unlockVariant: UnlockVariant, unlockSubType: UnlockSubType): boolean {
    //Level 1
    if (!this.data.has(unlockType)) return false;
    const unlockVariantMap = this.data.get(unlockType);

    //Level 2
    if (!unlockVariantMap?.has(unlockVariant)) return false;
    const unlockSubTypeMap = unlockVariantMap.get(unlockVariant);

    //Level 3
    if (!unlockSubTypeMap?.has(unlockSubType)) return false;
    return unlockSubTypeMap.get(unlockSubType)!;
  }

  SetValue(unlockType: UnlockType, unlockVariant: UnlockVariant, unlockSubType: UnlockSubType, value: boolean): void {
    //Level 1
    if (!this.data.has(unlockType)) {
      this.data.set(unlockType, new Map());
    }
    const unlockVariantMap = this.data.get(unlockType)!;

    //Level 2
    if (!unlockVariantMap.has(unlockVariant)) {
      unlockVariantMap.set(unlockVariant, new Map());
    }

    //Level 3
    const unlockSubTypeMap = unlockVariantMap.get(unlockVariant)!;
    unlockSubTypeMap.set(unlockSubType, value);
  }

  GetChallengesStatus(): Map<Challenge, boolean> {
    let challenges: Map<Challenge, boolean> = new Map();


    for (let i = 0; i < CHALLENGES.length; i++) {
      challenges.set(CHALLENGES[i] as Challenge, false);
    }

    if (!this.data.has(UnlockType.CHALLENGE)) {
      return challenges;
    }
    const unlockVariantMap = this.data.get(UnlockType.CHALLENGE);
    unlockVariantMap?.forEach((unlockSubType, unlockVariant) => {
        const challenge = unlockVariant as Challenge
        const value = unlockSubType.get(0) as boolean
        challenges.set(challenge, value);
    })

    return challenges;
  }

  GetCharactersStatus(): Map<StartingCharacters, boolean> {
    let characters: Map<StartingCharacters, boolean> = new Map();

    for (let i = 0; i < CHARACTERS.length; i++) {
      //Todo: change to StartingCharacter
      characters.set(CHARACTERS[i] as StartingCharacters, false);
    }

    if (!this.data.has(UnlockType.CHARACTER)) {
      return characters;
    }
    const unlockVariantMap = this.data.get(UnlockType.CHARACTER);
    unlockVariantMap?.forEach((unlockSubType, unlockVariant) => {
        const character = unlockVariant as StartingCharacters
        const value = unlockSubType.get(0) as boolean
        characters.set(character, value);
    })

    return characters;
  }

}