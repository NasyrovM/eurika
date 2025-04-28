import { Assignment, Assignments, Values } from "./Assignment";
import { Namespace } from "./Namespace";
import { ITree } from "./ITree";
import { TreeNode } from "./TreeNode";

export class FcDomain extends Set<ITree> {}

export class EcFunction implements ITree 
{

    private _assignments: Assignments = new Assignments();
    
    constructor(
        public uuid : string, 
        public namespace: Namespace,
        public name: string,
        public description: string,
        private _domain: FcDomain
    ) { }

    public get domain() : FcDomain
    {
        return this._domain;
    }

    get node(): TreeNode {
        let assignments = [...this._assignments];
        let firstAssignment = assignments[0];
        let values = firstAssignment.values;
        return TreeNode.createNode(values);
    }
    
    public get Assignments() : Assignments
    {
        return this._assignments;
    }

    public createAssignment(values: Values): void
    {
        let assignmet = Assignment.createAssignment(this, values)
        this._assignments.add(assignmet);
    }
}
