import { BatterySubType, BombSubType, CardType, Challenge, CoinSubType, CollectibleType, GridEntityType, HeartSubType, KeySubType, PickupVariant, PillColor, PillEffect, PlayerType, RoomType, SackSubType, SlotVariant, StageID, TrinketType } from "isaac-typescript-definitions";
import { RouteType, UnlockType } from "../enums/UnlockType";
import type { StartingCharacters } from "../enums/BaseGame";


export type UnlockVariant = undefined | Challenge | RouteType | StartingCharacters | StageID | RoomType | CollectibleType | TrinketType | CardType | PillEffect | PickupVariant | SlotVariant | GridEntityType;
export type UnlockSubType = undefined | HeartSubType | CoinSubType | BombSubType | KeySubType | BatterySubType | SackSubType | PillColor;

export class Unlock {
  type: UnlockType = UnlockType.CHALLENGE;
  variant: UnlockVariant = Challenge.APRILS_FOOL;
  subtype: UnlockSubType = 0;

  constructor(type: UnlockType=UnlockType.UNRESOLVED, variant: UnlockVariant=undefined, subtype: UnlockSubType=undefined) {
    this.type = type;
    this.variant = variant;
    this.subtype = subtype;
  }
}