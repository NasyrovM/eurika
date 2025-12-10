import { Unit } from '~/domain/types';

export class UnitInst extends Unit
{
  constructor(uuid: string, subUnits?:Array<UnitInst>)
  {
    super(uuid, subUnits);
  }
}
