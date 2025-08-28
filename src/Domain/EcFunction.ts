import { Assignment, Assignments } from './Assignment';
import { Values } from './Values';
import { Namespace } from './Namespace';
import { ITree } from './ITree';
import { TreeNode } from './TreeNode';
import { Coverage } from './Coverage';

export class FcDomain extends Set<ITree> {}

export class EcFunction implements ITree {
  private readonly _assignments: Assignments = new Assignments();

  constructor(
    // eslint-disable-next-line no-unused-vars
    public uuid: string,
    // eslint-disable-next-line no-unused-vars
    public namespace: Namespace,
    // eslint-disable-next-line no-unused-vars
    public name: string,
    // eslint-disable-next-line no-unused-vars
    public description: string,
    // eslint-disable-next-line no-unused-vars
    private readonly _domain: FcDomain,
  ) {}

  public get domain(): FcDomain {
    return this._domain;
  }

  get node(): TreeNode {
    const coverage = Coverage.getCoverage(this);
    const nodes = [] as TreeNode[];
    this._domain.forEach((x) => nodes.push(x.node));
    return this.reqNode(new Values(), nodes, coverage) ?? TreeNode.createNode(new Values());
  }

  private reqNode(prefix: Values, nodes: TreeNode[], coverage: Coverage): TreeNode | null {
    if (nodes.length === 0) {
      return coverage.containsValues(prefix)
        ? TreeNode.createNode(prefix)
        : null;
    }
    const head = nodes[0];
    const tail = nodes.slice(1);
    if (!head.children) {
      return this.reqNode(prefix.concat(head.values), tail, coverage);
    }

    let values = new Values().concat(prefix);
    nodes.forEach((x) => {
      values = values.concat(x.values);
    });

    const outChildren = [] as TreeNode[];
    head.children?.forEach((child) => {
      const childNodes = [child];
      childNodes.push(...tail);
      const childOut = this.reqNode(prefix, childNodes, coverage);
      if (childOut) {
        outChildren.push(childOut);
      }
    });

    if (outChildren.length === 0) return null;
    const node = TreeNode.createNode(values);
    outChildren.forEach((child) => node.addChild(child));
    return node;
  }

  public get Assignments(): Assignments {
    return this._assignments;
  }

  public createAssignment(values: Values): Assignment {
    const assignmet = Assignment.createAssignment(this, values);
    this._assignments.add(assignmet);
    return assignmet;
  }
}
