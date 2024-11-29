import { CardType, Challenge, PlayerType } from "isaac-typescript-definitions";
import { BOSS_OBJECTIVES_COUNT, BossObjectives, CharacterUnlockBossObjectives, FLOOR_OBJECTIVES_COUNT } from "../enums/CharacterObjectives";
import { CHARACTERS } from "../enums/enumRecords";
import { Unlock } from "./Unlock";
import { mod } from "../mod";
import { StartingCharacters } from "../enums/BaseGame";
import { UnlockType } from "../enums/UnlockType";
import { createCharacterAchievements } from "../achievements/characterAchievements";
import { getRandomEnumValue, shuffleArray } from "isaacscript-common";

export class CharacterData {
  floorData: Unlock[] = [];
  bossData: Unlock[] = [];

  //Contrusctors don't work
  init() {
    for(let i = 0; i < BOSS_OBJECTIVES_COUNT; i++) {
      this.bossData.push(new Unlock(UnlockType.UNRESOLVED))
    }
  }
}

export class AchievementData {
  characterData: CharacterData[] = [];
  bossData: Unlock[] = [];
  donationData: Unlock[] = [];
  challengeData: Unlock[] = [];

  //Contrusctors don't work
  init() {
    for(let i = 0; i < CHARACTERS.length; i++) {
      this.characterData.push(new CharacterData())
    }
  }


}

const v = {
  persistent: {
    unlockData: new AchievementData(),
  },
};


//Contrusctors don't work
function createAchievementData(): AchievementData {
  const data: AchievementData = new AchievementData();
  data.init();
  data.characterData.forEach(charData => {
    charData.init()
  });
  return data;
}


export function generateAchievementData(): void {

  const data: AchievementData = createAchievementData();


  let charAchievements = shuffleArray(createCharacterAchievements(), undefined);

  let curChar =  data.characterData[CHARACTERS[0] as StartingCharacters] as CharacterData
  while(charAchievements.length > 0)
  {
    const nextUnlock = charAchievements.pop() as Unlock
    curChar.bossData[getRandomEnumValue(CharacterUnlockBossObjectives, undefined)] = nextUnlock;
    const idx = nextUnlock.variant as number;
    curChar = data.characterData[idx] as CharacterData;
  }

  v.persistent.unlockData = data;


  const testData = v.persistent.unlockData;
  for(let i = 0; i < CHARACTERS.length; i++) {
    let char = testData.characterData[i]?.bossData[BossObjectives.ISAAC]?.variant
    Isaac.ConsoleOutput(char + " ")
  }
}



export function setAchievementData(data: AchievementData): void {
  v.persistent.unlockData = data;
}

mod.saveDataManager("achievementdata", v);