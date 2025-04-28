import { ITree } from "./ITree";
import { Namespace } from "./Namespace";
import { TreeNode } from "./TreeNode";

export class Unit implements ITree
{
    private _subSet: Unit[] | null = null;
    private _superSets: Unit[] | null = null;



    constructor(
        public uuid: string,
        public name: string,
        public content: string,
        public nameSpace: Namespace
    ) { }

    get subSet():Unit[] | null 
    {
        return this._subSet;
    }

    get superSets(): Unit[] | null
    {
        return this._superSets;
    }

    get node(): TreeNode {
        return this.getNode(this);
    }

    private getNode(domainUnit: Unit)
    {
        const assign = new Map<Unit, Unit>();
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
        unit.pushSuperUnits(this);
        this.pushSubSet(unit);
    }

    public addParent(unit: Unit)
    {
        this.pushSuperUnits(unit);
        unit.pushSubSet(unit);
    }

    private pushSubSet(subUnit: Unit): void
    {
        if(this._subSet == null) {
            this._subSet = [];
        }
        this._subSet.push(subUnit);
    }

    private pushSuperUnits(superUnit: Unit): void
    {
        if(this._superSets == null) {
            this._superSets = [];
        }
        this._superSets.push(superUnit);
    }
}