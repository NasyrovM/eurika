import { Namespace } from "./Namespace";

export class Unit
{
    subSet: Unit[] | null = null;
    superSets: Unit[] | null = null;

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
        if(this.superSets == null) {
            this.superSets = [];
        }
        this.superSets.push(superUnit);
    }
}