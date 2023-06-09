// Maintain this file as the single point of import for all interface definitions
// (to the extent possible) in order to avoid any circular reference errors. Basic types and
// abstract classes should be imported before their children. AFAIK the definitions can be
// stored anywhere and collected imports are fine as long as their constituents are impored
// first in this file.

import { ICompendiumItemData } from './classes/CompendiumItem'
import { ILicensedItemData } from './classes/pilot/components/license/LicensedItem'
import { ISynergyData } from './classes/components/feature/synergy/Synergy'
import { Action } from './classes/Action'
import { ICoreData } from './classes/mech/components/frame/CoreSystem'
import { IFrameData, IFrameStats } from './classes/mech/components/frame/Frame'
import { IMechEquipmentData } from './classes/mech/components/equipment/MechEquipment'
import { IDamageData } from './classes/Damage'
import { IRangeData } from './classes/Range'
import { IMechSystemData } from './classes/mech/components/equipment/MechSystem'
import { IWeaponModData } from './classes/mech/components/equipment/WeaponMod'
import { ICoreBonusData } from './classes/pilot/components/corebonus/CoreBonus'
import { IPilotEquipmentData } from './classes/pilot/components/Loadout/equipment/PilotEquipment'
import { IPilotArmorData } from './classes/pilot/components/Loadout/equipment/PilotArmor'
import { IPilotWeaponData } from './classes/pilot/components/Loadout/equipment/PilotWeapon'
import { IManufacturerData } from './classes/Manufacturer'
import { ITalentData } from './classes/pilot/components/talent/Talent'
import { ISkillData } from './classes/pilot/components/skill/Skill'
import { IMechWeaponData } from './classes/mech/components/equipment/MechWeapon'
import {
  INpcFeatureData,
  INpcReactionData,
  INpcSystemData,
  INpcDamageData,
  INpcWeaponData,
  INpcStats,
  INpcClassData,
  INpcTemplateData,
  INpcItemSaveData,
  INpcTechData,
  INpcData,
} from './classes/npc/interfaces'
import { IEncounterData, IMissionData, IActiveMissionData } from './classes/encounter/interfaces'
import { IContentPackManifest, IContentPack } from './classes/ContentPack'
import { ICounterData } from './classes/components/counters/Counter'
import { ITagCompendiumData } from './classes/Tag'
import { PilotData } from './classes/pilot/Pilot'

interface IImageContainer {
  SetLocalImage(): any
  SetCloudImage(): any
  Image: string
}

interface INotificationVariant {
  color: string
  icon: string
  prefix?: string
  timeout?: number
}

interface INotification {
  id: string
  variant: string
  text: string
  onClick?: () => void
}

interface IErrorReport {
  time: Date
  message: string
  component?: string
  stack: string
}

interface IRankedData {
  id: string
  rank: number
  custom?: boolean
  custom_desc?: string
  custom_detail?: string
}

interface IEquipmentData {
  id: string
  destroyed: boolean
  cascading: boolean
  note: string
  uses?: number
  flavorName?: string
  flavorDescription?: string
  customDamageType?: string
}

interface IMechWeaponSaveData extends IEquipmentData {
  loaded: boolean
  mod?: IEquipmentData
  customDamageType?: string
  maxUseOverride?: number
  selectedProfile: number
}

interface IOrganizationData {
  name: string
  purpose: string
  description: string
  efficiency: number
  influence: number
  actions: string
}

interface IPilotLoadoutData {
  id: string
  name: string
  armor: (IEquipmentData | null)[]
  weapons: (IEquipmentData | null)[]
  gear: (IEquipmentData | null)[]
  extendedWeapons: (IEquipmentData | null)[]
  extendedGear: (IEquipmentData | null)[]
}

interface IHistoryItem {
  field: string
  val?: any
}

interface IMountData {
  mount_type: string
  lock: boolean
  slots: IWeaponSlotData[]
  extra: IWeaponSlotData[]
  bonus_effects: string[]
}

interface IWeaponSlotData {
  size: string
  weapon: IMechWeaponSaveData | null
}

interface ITagData {
  id: string
  val?: string | number
}

interface ISnackbarSettings {
  text: string
  multiline?: boolean
  timeout?: number
  color?: string
  visible?: boolean
}

interface Brew {
  info: string
  dir: string
}

interface PrintOptions {
  mech_id: string
  loadout_index: number
  combo: boolean
}

interface Status {
  name: string
  type: string
  icon: string
  effects: string[]
}

interface Environment {
  id: string
  name: string
  description: string
}

interface Sitrep {
  id: string
  name: string
  description: string
  pcVictory: string
  enemyVictory: string
  noVictory?: string
  deployment?: string
  objective?: string
  controlZone?: string
  extraction?: string
}

export {
  ICompendiumItemData,
  ILicensedItemData,
  ISynergyData,
  Action,
  ICoreData,
  IFrameData,
  IFrameStats,
  IMechEquipmentData,
  IDamageData,
  IRangeData,
  IMechSystemData,
  IWeaponModData,
  ICoreBonusData,
  IPilotEquipmentData,
  IPilotArmorData,
  IPilotWeaponData,
  IManufacturerData,
  ITalentData,
  ISkillData,
  IMechWeaponData,
  INpcFeatureData,
  INpcReactionData,
  INpcSystemData,
  INpcTechData,
  INpcDamageData,
  INpcWeaponData,
  INpcStats,
  INpcClassData,
  INpcTemplateData,
  INpcData,
  INpcItemSaveData,
  IEncounterData,
  IMissionData,
  IActiveMissionData,
  IContentPackManifest,
  IContentPack,
  ICounterData,
  ITagCompendiumData,
  PilotData,
  IImageContainer,
  INotificationVariant,
  INotification,
  IErrorReport,
  IRankedData,
  IEquipmentData,
  IMechWeaponSaveData,
  IOrganizationData,
  IPilotLoadoutData,
  IHistoryItem,
  IMountData,
  IWeaponSlotData,
  ITagData,
  ISnackbarSettings,
  Brew,
  PrintOptions,
  Status,
  Environment,
  Sitrep,
}
