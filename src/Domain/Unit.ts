import { NameSpace } from "./NameSpace";

export class Unit
{
    constructor(
        public uuid: string,
        public name: string,
        public content: string,
        public nameSpace: NameSpace
    ) { }
}