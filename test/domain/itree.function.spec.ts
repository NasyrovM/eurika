import { Namespace, ITree, TreeNode, Values, FcDomain } from "~/domain";

describe('EcFunction ITree implementation', () => 
{
    const namespace = Namespace.createNamespace();
    const fcName = "New Function";
    const fcDescription = "Description";
    const unitA = namespace.createUnit("A");
    const unitA1 = namespace.createUnit("A1");
    const unitA2 = namespace.createUnit("A2");
    unitA.addChild(unitA1);
    unitA.addChild(unitA2);
    const unitB = namespace.createUnit("B");
    const unitB1 = namespace.createUnit("B1");
    const unitB2 = namespace.createUnit("B2");
    unitB.addChild(unitB1);
    unitB.addChild(unitB2);

    const fcDomain = new FcDomain([unitA, unitB]);

    const ecFunction = namespace.createFunction(fcName, fcDescription, fcDomain);
    ecFunction.createAssignment(new Values([[unitA, unitA], [unitB, unitB]]));
    const treeNode = ecFunction.node;
    
    test('EcFunction has assignment', () => expect(ecFunction.Assignments.size).toBeGreaterThan(0));
    test('EcFunction node has type Node', () => expect(treeNode).toBeInstanceOf(TreeNode));
    test('TreeNode has two child', () => expect(treeNode.children?.length).toEqual(2));
    test('TreeNode values has two dimentions', () => expect(treeNode.values.size).toEqual(2));
    // full outcome vs valueable outcome
    // make unit x unit 
    // make unit x function
    // make function x function
    // make unit x query
});