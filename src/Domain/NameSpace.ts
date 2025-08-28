import { IdService } from '~/service/IdService';
import { EcFunction, FcDomain } from './EcFunction';
import { Unit } from './Unit';

export class Namespace {
  units: Map<string, Unit> = new Map<string, Unit>();
  ecFunctions: EcFunction[] = [];

  constructor(
    // eslint-disable-next-line no-unused-vars
    public uuid: string,
    // eslint-disable-next-line no-unused-vars
    public name: string,
    // eslint-disable-next-line no-unused-vars
    public description: string,
  ) {}

  static createNamespace(
    name = 'Unnamed namespace',
    description = '',
  ): Namespace {
    return new Namespace(
      IdService.getUid(),
      name,
      description,
    );
  }

  public createUnit(
    name = 'unnamed unit',
    content = '',
  ): Unit {
    const newUnit = new Unit(IdService.getUid(), name, content, this);
    this.units.set(newUnit.uuid, newUnit);
    return newUnit;
  }

  public createFunction(
    name = 'unnamed funciton',
    description = '',
    domain: FcDomain,
  ): EcFunction {
    const ecFunction = new EcFunction(
      IdService.getUid(),
      this,
      name || 'unnamed funciton',
      description,
      domain,
    );
    this.ecFunctions.push(ecFunction);
    return ecFunction;
  }
}
