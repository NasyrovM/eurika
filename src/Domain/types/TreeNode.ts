import { Assignment } from './Assignment';
import { Relation } from './Relation';
import { Unit } from './Unit';

export class TreeNode {
  origin: Unit | Relation | null = null;
  assignments: Array<Assignment>;
  subNodes: Array<TreeNode>|null = null;
  constructor(assignments: Array<Assignment>) {
    this.assignments = assignments;
  }

  public toString(level = 0): string {
    let result = `${'\t'.repeat(level) + this.assignments.map(a => a.toString()).join('|')}\n`;
    if (this.subNodes) {
      this.subNodes.forEach((subNode) => {
        result += `${subNode.toString(level + 1)}`;
      });
    }
    return result;
  }
}
