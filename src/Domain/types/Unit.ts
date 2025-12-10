import { Assignment } from './Assignment';
import { TreeNode } from './TreeNode';

export class Unit
{
  uuid: string;
  #subUnits: Array<Unit> | null = null;

  public set subUnits(value: Array<Unit> | null) {
    this.#subUnits = value;
  }

  public get subUnits() : Array<Unit> | null {
    return this.#subUnits;
  };

  constructor(uuid: string, subUnits?: Array<Unit>)
  {
    this.uuid = uuid;
    if (subUnits) {
      this.#subUnits = subUnits;
    }
  }

  toString(): string
  {
    return this.uuid;
  }

  public Node(domainUnit: Unit = this): TreeNode
  {
    const assignments = new Array<Assignment>();
    assignments.push(new Assignment(domainUnit, this));
    const node = new TreeNode(assignments);
    node.origin = this;
    node.subNodes = this.subUnits?.map(subUnit => subUnit.Node(domainUnit)) ?? null;
    return node;
  }
}
