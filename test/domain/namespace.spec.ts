import { Namespace, Unit } from "~/domain";
import { UuidUtils } from "../utils/uuidUtils";
import { EcFunction, FcDomain } from "~/domain/EcFunction";
import { ITree } from "~/domain/ITree";


describe('Namespace creating', () => {
    const namespaceName = "Namespace Name";
    const namespaceDescrption = "Namespace Description";
    const namespace = Namespace.createNamespace(namespaceName, namespaceDescrption);

    test("Factory function returns namespace instance", () => expect(namespace).toBeInstanceOf(Namespace));
    test("Namspace name matchs create param name", () => expect(namespace.name).toEqual(namespaceName));
    test("Namspace description matchs create param description", () => expect(namespace.description).toEqual(namespaceDescrption));
});

describe('Create Unit in Namespace', () => {
    const namespace = Namespace.createNamespace();
    const unitName = "New Unit";
    const unitContent = "Unit Content";
    const unit = namespace.createUnit(unitName, unitContent);
    const subUnit = namespace.createUnit("subUnit");
    unit.addChild(subUnit);
    
    test('CreateUnit returns Unit', () => expect(unit).toBeInstanceOf(Unit));
    test('Unit name match create param', () => expect(unit.name).toBe(unitName));
    test('Unit content match create param', () => expect(unit.content).toBe(unitContent));
    test('Unit uuid is defined', () => expect(unit.uuid).toBeDefined());
    test('Unit uuid has UUID format', () => expect(UuidUtils.hasUUIDformat(unit.uuid)).toBeTruthy());
});

describe('Create Function in Namespace', ()=> {
    const namespace = Namespace.createNamespace();
    const fcName = "New Function";
    const fcDescription = "Description";
    const unitA = namespace.createUnit("A");
    const unitB = namespace.createUnit("B");
    const fcDomain = new Set<ITree>([unitA, unitB]);
    const ecFunction = namespace.createFunction(fcName, fcDescription, fcDomain);

    test('CreateFunction returns Function', () => expect(ecFunction).toBeInstanceOf(EcFunction));
    test('Function name match create param', () => expect(ecFunction.name).toBe(fcName));
    test('Function description match create param', () => expect(ecFunction.description).toBe(fcDescription));
    test('Function domain match create param', () => expect(ecFunction.domain).toBe(fcDomain));
});
