import { Namespace } from "~/domain";

describe("Node outcome for unit", () => {
    const namespace = Namespace.createNamespace();
    const unitSingle = namespace.createUnit("UnitSingle");
    const superUnit = namespace.createUnit("SuperUnit");
    const subUnitOne = namespace.createUnit("SubUnitOne");
    const subUnitTwo = namespace.createUnit("SubUnitTwo");
    superUnit.addChild(subUnitOne);
    superUnit.addChild(subUnitTwo);

    test("Node outcome for single unit", () => 
    {
        expect(unitSingle.node.assign).toEqual(new Map([[unitSingle, unitSingle]]));
    });

    test("Node Assignments should has only one key-value pair", () => 
    {
        expect(unitSingle.node.assign.size).toBe(1);
    });

    test("SuperUnit Node should has children", () => 
    {
        expect(superUnit.node.children).toBeDefined();
    });

    test("SuperUnit Node should has two children", () => 
    {
        expect(superUnit.node.children?.length??0).toBe(2);
    });

    test("Node child assignment key shoul be equal root node assign key", ()=>
    {
        const rootNode = superUnit.node;
        const childDomains  = rootNode.children?.map(x => [...x.assign][0][0].uuid);
        expect(childDomains?.every(nodeUuid => nodeUuid == superUnit.uuid)).toBeTruthy();
    });
});