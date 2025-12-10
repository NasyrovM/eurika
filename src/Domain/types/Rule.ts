import { Assignment } from './Assignment';

export class Rule
{
  uuid: string;
  readonly #values: Array<Assignment> | null = null;

  public get values() : Array<Assignment> | null {
    return this.#values;
  }

  constructor(uuid: string, values?: Array<Assignment>)
  {
    this.uuid = uuid;
    this.#values = values ?? null;
  }
}

