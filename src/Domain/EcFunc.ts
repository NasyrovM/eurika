import { FcAssign } from "./FcAssign";
import { NameSpace } from "./NameSpace";
import { Unit } from "./Unit";

export class FunctionDomain extends Array<Unit>
{

}

export class SubFuncitons extends Array<Function>{}

export class FunctionAssigns extends Array<FcAssign>{}

export class EcFunc {
    constructor(
        public namespace: NameSpace,
        public fcDomain: FunctionDomain,
        public fcAssigns: FunctionAssigns,
        public subFunctions: SubFuncitons
    ) { }
}
