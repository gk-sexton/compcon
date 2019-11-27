import { store } from '@/store'
import _ from 'lodash'
import {
  Damage,
  Range,
  WeaponMod,
  WeaponSize,
  WeaponType,
  ItemType,
  MechEquipment,
  DamageType,
  RangeType,
  Mech,
} from '@/class'
import { IMechEquipmentData, IDamageData, IRangeData } from '@/interface'

// TODO:
// class WeaponAmmo {}

interface IMechWeaponData extends IMechEquipmentData {
  mount: WeaponSize
  type: WeaponType
  damage: IDamageData[]
  range: IRangeData[]
}

class MechWeapon extends MechEquipment {
  private _size: WeaponSize
  private _weapon_type: WeaponType
  private _damage?: Damage[]
  private _range?: Range[]
  private _mod: WeaponMod | null
  // private ammo?: WeaponAmmo | null;

  public constructor(weaponData: IMechWeaponData) {
    super(weaponData)
    this._size = weaponData.mount
    this._weapon_type = weaponData.type
    if (weaponData.damage) this._damage = weaponData.damage.map(x => new Damage(x))
    if (weaponData.range) this._range = weaponData.range.map(x => new Range(x))
    this._mod = null
    this._item_type = ItemType.MechWeapon
  }

  public get Size(): WeaponSize {
    return this._size
  }

  public get Type(): WeaponType {
    return this._weapon_type
  }

  public get TotalSP(): number {
    if (!this.Mod) return this.sp
    return this.Mod.SP + this.sp
  }

  public get SP(): number {
    return this.sp
  }

  public get ModSP(): number {
    return this.Mod ? this.Mod.SP : 0
  }

  public get Damage(): Damage[] {
    if (this._damage && this.Mod && this.Mod.AddedDamage)
      return this._damage.concat(this.Mod.AddedDamage)
    return this._damage || []
  }

  public get DamageType(): DamageType[] {
    return this._damage.map(x => x.Type)
  }

  public get Range(): Range[] {
    return this._range || []
  }

  public getTotalRange(mech: Mech): Range[] {
    let bonuses = [] as { type: RangeType; val: number }[]
    if (this.Mod && this.Mod.AddedRange)
      bonuses.push({
        type: RangeType.Range,
        val: parseInt(this.Mod.AddedRange.Value),
      })
    if (mech.Pilot.has('CoreBonus', 'neurolinked'))
      bonuses.push({
        type: RangeType.Range,
        val: 3,
      })
    if (mech.Pilot.has('CoreBonus', 'gyges') && this.Type === WeaponType.Melee)
      bonuses.push({
        type: RangeType.Threat,
        val: 1,
      })
    if (
      mech.ActiveLoadout.HasSystem('externalbatteries') &&
      this.Damage[0].Type === DamageType.Energy
    )
      if (this.Type === WeaponType.Melee) {
        bonuses.push({
          type: RangeType.Threat,
          val: 1,
        })
      } else {
        bonuses.push({
          type: RangeType.Range,
          val: 5,
        })
      }
    return Range.AddBonuses(this.Range, bonuses)
  }

  public get RangeType(): RangeType[] {
    return this._range.map(x => x.Type)
  }

  public set Mod(_mod: WeaponMod | null) {
    this._mod = _.cloneDeep(_mod)
  }

  public get Mod(): WeaponMod | null {
    return this._mod || null
  }

  public static Serialize(item: MechWeapon): IMechWeaponSaveData {
    return {
      id: item.ID,
      uses: item.Uses || 0,
      destroyed: item.IsDestroyed,
      unshackled: item.IsUnshackled,
      loaded: item.Loaded,
      note: item.Note,
      mod: item.Mod ? WeaponMod.Serialize(item.Mod) : null,
    }
  }

  public static Deserialize(data: IMechWeaponSaveData): MechWeapon {
    let item = store.getters.instantiate('MechWeapons', data.id) as MechWeapon
    item.Uses = data.uses || 0
    item.IsDestroyed = data.destroyed || false
    item.IsUnshackled = data.unshackled || false
    item.Loaded = data.loaded || true
    item.Mod = data.mod ? WeaponMod.Deserialize(data.mod) : null
    item.Note = data.note
    return item
  }
}

export { MechWeapon, IMechWeaponData }
