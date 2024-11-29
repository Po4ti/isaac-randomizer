import { Challenge, PlayerType } from "isaac-typescript-definitions";
import { getEnumValues } from "isaacscript-common";
import { StartingCharacters } from "./BaseGame";
import { CharacterUnlockBossObjectives } from "./CharacterObjectives";

export const CHALLENGES: readonly Challenge[] = getEnumValues(Challenge);

export const CHARACTERS: readonly StartingCharacters[] = getEnumValues(StartingCharacters);

export const CHAR_UNLOCK_BOSSES: readonly CharacterUnlockBossObjectives[] = getEnumValues(CharacterUnlockBossObjectives);