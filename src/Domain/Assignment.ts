import { IdService } from '~/service/IdService';
import { EcFunction } from './EcFunction';
import { Values } from './Values';
import { ITree } from './ITree';
import { TreeNode } from './TreeNode';

export class Assignment implements ITree {
  private constructor(
    // eslint-disable-next-line no-unused-vars
    public uuid: string,
    // eslint-disable-next-line no-unused-vars
    public ecFunction: EcFunction,
    // eslint-disable-next-line no-unused-vars
    public values: Values,
  ) {}

  public static createAssignment(ecFunction: EcFunction, values: Values) {
    return new Assignment(IdService.getUid(), ecFunction, values);
  }

  public toString(): string {
    return this.values.toString();
  }

  public get node(): TreeNode {
    return this.recursiveNode(new Values(), this.values);
  }

  private recursiveNode(prefix: Values, values: Values): TreeNode {
    if (values.size === 0) {
      return TreeNode.createNode(prefix);
    }
    const [domain, element, tail] = values.headTail();
    if (element.subSet == null || element.subSet.length === 0) {
      return this.recursiveNode(prefix.concat(new Values([[domain, element]])), tail);
    }

    const resultNode = TreeNode.createNode(prefix.concat(values));
    element.subSet?.forEach((child) => {
      const childValues = new Values([[domain, child]]).concat(tail);
      const leaf = this.recursiveNode(prefix, childValues);
      resultNode.addChild(leaf);
    });

    return resultNode;
  }
}

export class Assignments extends Set<Assignment> {}
