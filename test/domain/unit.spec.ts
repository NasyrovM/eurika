import { Namespace } from "~/domain/Namespace";

describe("Unit subset superset", () => {
    const namespace = Namespace.createNamespace();
    const superUnit = namespace.createUnit("SuperUnit");
    const subUnit = namespace.createUnit("SubUnit");

    superUnit.addChild(subUnit);
    test("SuperUnit has child subUnit", () => expect(superUnit.subSet).toContain(subUnit));
    test("SubUnit has superUnit as SuperSet", () => expect(subUnit.superSets).toContain(superUnit));
});