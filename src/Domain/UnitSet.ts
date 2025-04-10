import exp from "constants";
import { NameSpace } from "./NameSpace";
import { Unit } from "./Unit";


export class UnitSet {
    constructor(
        public subUnit: Unit,
        public superUnit: Unit,
        public nameSpace: NameSpace
    ) { }
}
