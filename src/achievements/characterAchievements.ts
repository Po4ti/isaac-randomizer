import { Unlock } from "../classes/Unlock";
import { StartingCharacters } from "../enums/BaseGame";
import { CHARACTERS } from "../enums/enumRecords";
import { UnlockType } from "../enums/UnlockType";

export function createCharacterAchievements(): Unlock[]
{
  let achievements: Unlock[] = [];

  for(let i = 0; i < CHARACTERS.length - 1; i++)
  {
    //const idx = CHARACTERS[i + 1] as StartingCharacters
    achievements.push(new Unlock(UnlockType.CHARACTER, i + 1, 0))
  }

  return achievements;
}