import { ICollectionGroupable } from './ICollectionGroupable'

interface IGroupData {
  group: string
  sort_index: number
}

class GroupController {
  public readonly Parent: ICollectionGroupable

  private _group: string
  private _sortIndex: number

  public constructor(parent: ICollectionGroupable) {
    this.Parent = parent
  }

  public reset() {
    this._group = ''
    this._sortIndex = -1
  }

  public get Group(): string {
    return this._group
  }

  public set Group(val: string) {
    this._group = val
    this.Parent.SaveController.save()
  }

  public get SortIndex(): number {
    return this._sortIndex
  }

  public set SortIndex(val: number) {
    this._sortIndex = val
    this.Parent.SaveController.save()
  }

  public static Serialize(parent: ICollectionGroupable, target: any) {
    target.group = parent.GroupController.Group
    target.sort_index = parent.GroupController.SortIndex
  }

  public static Deserialize(parent: ICollectionGroupable, data: IGroupData) {
    if (!parent.GroupController)
      throw new Error(
        `GroupController not found on parent (${typeof parent}). New GroupControllers must be instantiated in the parent's constructor method.`
      )

    parent.GroupController._group = data.group || ''
    parent.GroupController._sortIndex = data.sort_index || -1
  }
}
export { IGroupData, GroupController }
