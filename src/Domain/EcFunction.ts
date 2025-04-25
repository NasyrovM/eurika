import { Assignment } from "./Assign";
import { Namespace } from "./Namespace";
import { ITree } from "./ITree";
import { Node } from "./Node";

export class FcDomain extends Set<ITree> {}
export class FcAssignmenets extends Array<Assignment>{}

export class EcFunction implements ITree 
{

    private _fcAssigns: FcAssignmenets = [];
    
    constructor(
        public uuid : string, 
        public namespace: Namespace,
        public name: string,
        public description: string,
        private _domain: FcDomain
    ) { }

    public get domain() 
    {
        return this._domain;
    }

    get node(): Node {
        throw new Error("Method not implemented.");
    }    
}
