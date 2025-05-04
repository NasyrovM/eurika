import { Unit } from "./Unit";

export class ValueDomain extends Unit {}
export class ValueElement extends Unit {}

export class Values extends Map<ValueDomain, ValueElement> {
    
    public concat(values: Values): Values 
    {
        const result = new Values();
        this.forEach((val, key) => result.set(key, val));
        values.forEach((val, key) => result.set(key, val));
        return result;
    }

    public toString = () =>
    {
        let result : string = "";
        this.forEach((val, key) => { result = result.concat("|", key.toString() + ":" + val.toString()); } );
        return result.substring(1);
    }

    public headTail() : [ValueDomain, ValueElement, Values] //#todo move to Core
    {
        const pairArray = [...this];
        return [pairArray[0][0], pairArray[0][1], new Values(pairArray.slice(1))];
    }

    public compare(map :Values) :boolean {
        let testVal;
        if (this.size !== map.size) {
            return false;
        }
        for (let [key, val] of this) {
            testVal = map.get(key);
            // in cases of an undefined value, make sure the key
            // actually exists on the object so there are no false positives
            if (testVal !== val || (testVal === undefined && !map.has(key))) {
                return false;
            }
        }
        return true;
    }
}
