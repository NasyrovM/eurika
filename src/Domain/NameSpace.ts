import { IdService } from "~/service/IdService";
import { EcFunction, FcDomain } from "./EcFunction";
import { Unit } from "./Unit";

export class Namespace {

    units: Map<string, Unit> = new Map<string, Unit>();

    constructor(
        public uuid: string,
        public name: string,
        public description: string
    ) { }

    static createNamespace(
        name: string = "Unnamed namespace", 
        description: string = ""
    ): Namespace
    {
        return new Namespace(
            IdService.getUid(),
            name,
            description
        );
    }

    public createUnit(
        name: string = "unnamed unit", 
        content: string = ""
    ): Unit
    {
        const newUnit = new Unit(IdService.getUid(), name, content, this);
        this.units.set(newUnit.uuid, newUnit);
        return newUnit;
    }

    public createFunction(
        name: string = "unnamed funciton", 
        description: string = "",
        domain: FcDomain
    ): EcFunction
    {
        return new EcFunction(
            IdService.getUid(),
            this,
            name,
            description,
            domain
        );
    }
}
