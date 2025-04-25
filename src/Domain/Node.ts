import { Assignment } from "./Assign";
import { Unit } from "./Unit";

export class Node {

    private _assign : Assignment;
    private _parent : Node | null = null;
    private _children : Node[] | null = null;

    public get assign(): Assignment
    {
        return this._assign;
    }

    public get parent(): Node | null 
    {
        return this._parent;
    };

    public get children(): Node [] | null 
    {
        return this._children;
    };

    public addChildren(nods: Node[]): void
    {
        nods.forEach(child => {
            this.addChild(child);
        });
    }

    public addChild(child: Node):void
    {
        if(this._children == null)
        {
            this._children = [];
        }
        this._children.push(child);
        child.setParent(this);
    }

    private setParent(parentNode: Node)
    {
        // this._parent = parentNode;
    }

    private constructor(assign: Assignment) 
    {
        this._assign = assign;
    }

    public static createNode(assign: Map<Unit, Unit>): Node 
    {
        const node = new Node(assign);
        return node;
    }
}