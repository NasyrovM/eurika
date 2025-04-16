import { Namespace } from "~/domain/Namespace";
import { Unit } from "~/domain/Unit";
import { UuidUtils } from "../utils/uuidUtils";

test('should create and return Namespace', () => {
    expect(Namespace.createNamespace()).toBeInstanceOf(Namespace);
});

describe('create Unit in Namespace', () => {
    const namespace = Namespace.createNamespace();
    const unitName = "New Unit";
    const unitContent = "Unit Content";
    const unit = namespace.createUnit(unitName, unitContent);
    
    test('create returns Unit', () => expect(unit).toBeInstanceOf(Unit));
    test('unit name match create param', () => expect(unit.name).toBe(unitName));
    test('unit content match create param', () => expect(unit.content).toBe(unitContent));
    test('unit uuid is defined', () => expect(unit.uuid).toBeDefined());
    test('unit uuid has UUID format', () => expect(UuidUtils.hasUUIDformat(unit.uuid)).toBeTruthy());
});
