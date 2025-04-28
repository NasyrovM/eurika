import { IdService } from "~/service/IdService";
import { EcFunction } from "./EcFunction"
import { Unit } from "./Unit";

export class ValueDomain extends Unit {}
export class ValueElement extends Unit {}

export class Values extends Map<ValueDomain, ValueElement>{}

export class Assignment
{
    private constructor(
        public uuid: string,
        public ecFunction: EcFunction,
        public values: Values
    ) { }

    public static createAssignment(ecFunction: EcFunction, values: Values)
    {
        return new Assignment(IdService.getUid(), ecFunction, values)
    }
}

export class Assignments extends Set<Assignment> {}