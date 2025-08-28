import { Values } from './Values';

export class TreeNode {
  private readonly _values: Values;
  private _children: TreeNode[] | null = null;

  private constructor(values: Values) {
    this._values = values;
  }

  public get values(): Values {
    return this._values;
  }

  public get children(): TreeNode[] | null {
    return this._children;
  }

  public addChildren(nods: TreeNode[]): void {
    nods.forEach((child) => {
      this.addChild(child);
    });
  }

  public addChild(child: TreeNode): void {
    this._children ??= [];
    this._children.push(child);
  }

  public toString = () => {
    let childrenString = '';
    if (this.children) {
      childrenString = `[${this.children.map((x) => x.toString())
        .reduce((all, item) => `${all},${item}`, '').substring(1)}]`;
    }
    return `(${this.values.toString()})${childrenString}`;
  };

  public static createNode(values: Values): TreeNode {
    const node = new TreeNode(values);
    return node;
  }

  public getLeafValues = (): Values[] => {
    const childrenLength = this.children?.length ?? 0;
    return childrenLength
      ? this.children!.reduce<Values[]>((all, child) => all.concat(child.getLeafValues()), [])
      : [this.values];
  };
}
