import { IdService } from "../service/IdService";
import { Unit } from "./Unit";

export class Namespace {

    units: Map<string, Unit> = new Map<string, Unit>();

    constructor(
        public uuid: string,
        public name: string,
        public description: string
    ) { }

    static createNamespace(name: string = "Unnamed namespace", description: string = ""): Namespace
    {
        return new Namespace(
            IdService.getUid(),
            name,
            description
        );
    }

    createUnit(name: string = "unnamed unit", content: string = ""): Unit
    {
        const newUnit = new Unit(IdService.getUid(), name, content, this);
        this.units.set(newUnit.uuid, newUnit);
        return newUnit;
    }
}
