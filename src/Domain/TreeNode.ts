import { Values } from "./Assignment";
import { Unit } from "./Unit";

export class TreeNode {

    private _values : Values;
    private _parent : TreeNode | null = null;
    private _children : TreeNode[] | null = null;

    public get parent(): TreeNode | null 
    {
        return this._parent;
    };

    public get values()
    {
        return this._values;
    }

    public get children(): TreeNode [] | null 
    {
        return this._children;
    };

    public addChildren(nods: TreeNode[]): void
    {
        nods.forEach(child => {
            this.addChild(child);
        });
    }

    public addChild(child: TreeNode):void
    {
        if(this._children == null)
        {
            this._children = [];
        }
        this._children.push(child);
        child.setParent(this);
    }

    private setParent(parentNode: TreeNode)
    {
        // this._parent = parentNode;
    }

    private constructor(values: Values) 
    {
        this._values = values;
    }

    public static createNode(values: Map<Unit, Unit>): TreeNode 
    {
        const node = new TreeNode(values);
        return node;
    }
}