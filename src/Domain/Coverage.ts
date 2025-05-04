import { Assignment } from "./Assignment";
import { EcFunction } from "./EcFunction";
import { Values } from "./Values";

export class Coverage extends Map<Assignment, Values[]> 
{
    private _allValues : Values[] = []
    private get allValues() : Values[]
    {
        if(!this._allValues.length)
        {
            this.forEach(x => this._allValues.push(...x));
        }
        return this._allValues;
    }

    private constructor() {
        super();
    }

    public static getCoverage(efFunction: EcFunction) : Coverage
    {
        const coverage = new Coverage();
        efFunction.Assignments.forEach(assigment => coverage.set(assigment, assigment.node.getLeafValues()));
        return coverage;
    }

    public containsValues(values :Values) :boolean
    {
        return this.allValues.some(x => x.compare(values));
    }
}
