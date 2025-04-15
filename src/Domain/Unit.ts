import { Namespace } from "./Namespace";

export class Unit
{
    subSet: Unit[] | null = null;
    superUnits: Unit[] | null = null;

    constructor(
        public uuid: string,
        public name: string,
        public content: string,
        public nameSpace: Namespace
    ) { }

    public addChild(unit: Unit)
    {
        unit.pushSuperUnits(this);
        this.pushSubSet(unit);
    }

    public addParent(unit: Unit)
    {
        this.pushSuperUnits(unit);
        unit.pushSubSet(unit);
    }

    private pushSubSet(subUnit: Unit): void
    {
        if(this.subSet == null) {
            this.subSet = [];
        }
        this.subSet.push(subUnit);
    }

    private pushSuperUnits(superUnit: Unit): void
    {
        if(this.superUnits == null) {
            this.superUnits = [];
        }
        this.superUnits.push(superUnit);
    }
}