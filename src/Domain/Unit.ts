import { IdService } from '~/service/IdService';
import { Namespace } from './Namespace';
import { ITree } from './ITree';
import { TreeNode } from './TreeNode';
import { Values } from './Values';

export class Unit implements ITree {
  private _subSet: Unit[] | null = null;

  constructor(
    // eslint-disable-next-line no-unused-vars
    public uuid: string,
    // eslint-disable-next-line no-unused-vars
    public name: string,
    // eslint-disable-next-line no-unused-vars
    public content: string,
    // eslint-disable-next-line no-unused-vars
    public nameSpace: Namespace,
  ) {}

  public static createUnit(name: string, content: string, nameSpace: Namespace) {
    return new Unit(IdService.getUid(), name, content, nameSpace);
  }

  public toString = () => this.name;

  get subSet(): Unit[] | null {
    return this._subSet;
  }

  get node(): TreeNode {
    return this.getNode(this);
  }

  private getNode(domainUnit: Unit) {
    const assign = new Values();
    assign.set(domainUnit, this);
    const rootNode = TreeNode.createNode(assign);
    if (this._subSet) {
      this._subSet.forEach((subUnit) => {
        rootNode.addChild(subUnit.getNode(domainUnit));
      });
    }
    return rootNode;
  }

  public addChild(unit: Unit) {
    this.pushSubSet(unit);
  }

  private pushSubSet(subUnit: Unit): void {
    this._subSet ??= [];
    this._subSet.push(subUnit);
  }
}
