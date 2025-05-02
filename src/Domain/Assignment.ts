import { IdService } from "~/service/IdService";
import { EcFunction } from "./EcFunction"
import { Unit } from "./Unit";
import { Values } from "./Values";

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