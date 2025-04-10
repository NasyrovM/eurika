import { EcTuple } from "./EcTuple";
import { Unit } from "./Unit";


export class EcFunc {
    constructor(
        public fDomain: Unit[],
        public fRules: EcTuple,
        public subFuncs: EcFunc[]
    ) { }
}
