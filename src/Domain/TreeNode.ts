import { Values } from "./Values";
import { Unit } from "./Unit";

export class TreeNode {

    private _values : Values;
    private _children : TreeNode[] | null = null;

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
    }

    private constructor(values: Values) 
    {
        this._values = values;
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

    public static createNode(values: Values): TreeNode 
    {
        const node = new TreeNode(values);
        return node;
    }

    public getLeafValues = () :Values[] => (this.children?.length)
         ? this.children.reduce((all, child) => all.concat(child.getLeafValues()), [] as Values[])
         : [this.values];

}