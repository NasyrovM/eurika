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
}
