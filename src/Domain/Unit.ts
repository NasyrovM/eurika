import { ITree } from "./ITree";
import { Namespace } from "./Namespace";
import { TreeNode } from "./TreeNode";
import { Values } from "./Values";

export class Unit implements ITree
{
    private _subSet: Unit[] | null = null;

    constructor(
        public uuid: string,
        public name: string,
        public content: string,
        public nameSpace: Namespace
    ) { }

    public toString = () => this.name;

    get subSet():Unit[] | null 
    {
        return this._subSet;
    }

    get node(): TreeNode {
        return this.getNode(this);
    }

    private getNode(domainUnit: Unit)
    {
        const assign = new Values();
        assign.set(domainUnit, this);
        const rootNode = TreeNode.createNode(assign);
        if(this._subSet)
        {
            this._subSet.forEach(subUnit => 
            {
                rootNode.addChild(subUnit.getNode(domainUnit));
            });
        }
        return rootNode;
    }

    public addChild(unit: Unit)
    {
        this.pushSubSet(unit);
    }

    private pushSubSet(subUnit: Unit): void
    {
        if(this._subSet == null) {
            this._subSet = [];
        }
        this._subSet.push(subUnit);
    }
}