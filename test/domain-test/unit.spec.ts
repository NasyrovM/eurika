import { UnitInst } from 'test/types';

describe('Unit create', () => {
  const unit = new UnitInst('U');

  test('Unit instance created', () => expect(unit).toBeInstanceOf(UnitInst));
  test('Unit uuid is U', () => expect(unit.uuid).toBe('U'));
  test('Unit toString is U', () => expect(unit.toString()).toBe('U'));
});

describe('Unit SubUnits', () => {
  const domainUnit = new UnitInst('U1');
  const subUnit1 = new UnitInst('U1.1');
  const subUnit2 = new UnitInst('U1.2');
  domainUnit.subUnits = [subUnit1, subUnit2];

  test('Unit has 2 subUnits', () => expect(domainUnit.subUnits?.length).toBe(2));
});

describe('Unit Node', () => {
  const domainUnit = new UnitInst('U1');
  const subUnit1 = new UnitInst('U1.1');
  const subUnit2 = new UnitInst('U1.2');
  domainUnit.subUnits = [subUnit1, subUnit2];
  const node = domainUnit.Node();
  test('Unit Node is [U1:U1]', () => expect(node.toString()).toBe('U1:U1\n\tU1:U1.1\n\tU1:U1.2\n'));
  test('Unit Node origin is domainUnit', () => expect(node.origin).toBe(domainUnit));
  test('Unit Node has 2 subNodes', () => expect(node.subNodes?.length).toBe(2));
  test('Unit Node subnode[0] Assignments is [U1:U1.1]', () => expect(node.subNodes?.[0].toString()).toBe('U1:U1.1\n'));
});

