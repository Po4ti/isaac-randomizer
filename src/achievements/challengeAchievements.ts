import type { Challenge } from "isaac-typescript-definitions";
import { Unlock } from "../classes/Unlock";
import type { StartingCharacters } from "../enums/BaseGame";
import { CHALLENGES, CHARACTERS } from "../enums/enumRecords";
import { UnlockType } from "../enums/UnlockType";

export function createChallengeAchievements(): Unlock[]
{
  let achievements: Unlock[] = new Array<Unlock>();

  for(let i = 0; i < CHALLENGES.length - 1; i++)
  {
    const idx = CHALLENGES[i + 1] as Challenge
    achievements.push(new Unlock(UnlockType.CHALLENGE, idx, 0))
  }

  return achievements;
}