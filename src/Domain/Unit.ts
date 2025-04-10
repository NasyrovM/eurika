import { NameSpace } from "./NameSpace";
import { INodeOutcome } from "./INodeOutcome";
import { Node } from "./Node";

export class Unit
{
    constructor(
        public uuid: string,
        public name: string,
        public content: string,
        public nameSpace: NameSpace
    ) { }
}


