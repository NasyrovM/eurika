import { Assign } from "./Assign";
import { Namespace } from "./Namespace";
import { Unit } from "./Unit";

export class FunctionDomain extends Array<Unit>
{

}

export class SubFuncitons extends Array<Function>{}

export class FunctionAssigns extends Array<Assign>{}

export class EcFunc {
    constructor(
        public namespace: Namespace,
        public fcDomain: FunctionDomain,
        public fcAssigns: FunctionAssigns,
        public subFunctions: SubFuncitons
    ) { }
}
