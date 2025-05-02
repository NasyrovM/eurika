import { Values } from "./Values";
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

    public setParent(parentNode: TreeNode)
    {
        this._parent = parentNode;
    }

    private constructor(values: Values, parent: TreeNode | null) 
    {
        this._values = values;
        this._parent = parent;
    }

    public toString = () => 
    {
        let childrenString = "";
        if(this.children)
        {
            childrenString = "[" + this.children.map(x => x.toString())
            .reduce((all, item) => all + "," + item, "").substring(1) + "]";
        }
        return `(${this.values.toString()})${childrenString}`; 
    };

    public static createNode(values: Values, parent: TreeNode | null): TreeNode 
    {
        const node = new TreeNode(values, parent);
        return node;
    }
}