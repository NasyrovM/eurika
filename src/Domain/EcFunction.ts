import { Assignment, Assignments } from "./Assignment";
import { Values } from "./Values";
import { Namespace } from "./Namespace";
import { ITree } from "./ITree";
import { TreeNode } from "./TreeNode";
import { Coverage } from "./Coverage";

export class FcDomain extends Set<ITree> {}
;

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

    get node(): TreeNode 
    {
        const coverage = new Coverage();
        this.Assignments.forEach(assigment => coverage.set(assigment, assigment.coverValues()));
        const nodes = [] as TreeNode[];
        this._domain.forEach(x => nodes.push(x.node));         
        return this.reqNode(new Values(), nodes, null);
    }

    private reqNode(prefix: Values, nodes : TreeNode[], parent: TreeNode | null) : TreeNode
    {
        if(!nodes.length)
        {
            return TreeNode.createNode(prefix, parent);
        }
        const head = nodes[0];
        const tail = nodes.slice(1);
        if(!head.children)
        {
            return this.reqNode(prefix.concat(head.values), tail, parent);
        }
        
        let values = new Values().concat(prefix);
        nodes.forEach(x => {values = values.concat(x.values);});

        const node = TreeNode.createNode(values, parent);
        head.children?.forEach(child => 
        {
            const childNodes = [child];
            childNodes.push(...tail);
            const childOut = this.reqNode(prefix, childNodes, parent);
            node.addChild(childOut);
        });
        return node;
    }
    
    public get Assignments() : Assignments
    {
        return this._assignments;
    }

    public createAssignment(values: Values): Assignment
    {
        const assignmet = Assignment.createAssignment(this, values)
        this._assignments.add(assignmet);
        return assignmet;
    }
}
