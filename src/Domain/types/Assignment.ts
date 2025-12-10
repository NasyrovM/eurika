import { Unit } from './Unit';

export class Assignment
{
  domain: Unit;
  subset: Unit;

  constructor(domain: Unit, subset: Unit)
  {
    this.domain = domain;
    this.subset = subset;
  }

  public toString(): string
  {
    return `${this.domain.toString()}:${this.subset.toString()}`;
  }
}

