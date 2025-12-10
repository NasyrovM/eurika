import { Rule } from './Rule';
import { Unit } from './Unit';


export class Relation {
  uuid: string;
  signature: Array<Unit>;
  readonly #rules: Array<Rule> = [];

  public get rules(): Array<Rule> {
    return this.#rules;
  }

  constructor(uuid: string, signature: Unit[], rules?: Rule[]) {
    this.uuid = uuid;
    this.signature = signature;
    this.#rules = rules ?? [];
  }
}
