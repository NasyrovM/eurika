import { arrayUtils } from 'test/utils/arrayUtils';
import { Namespace, TreeNode, Values, FcDomain } from '~/domain';

describe('EcFunction ITree implementation', () =>
{
  const namespace = Namespace.createNamespace();
  const fcName = 'New Function';
  const fcDescription = 'Description';
  const unitA = namespace.createUnit('A');
  const unitA1 = namespace.createUnit('A1');
  const unitA2 = namespace.createUnit('A2');
  unitA.addChild(unitA1);
  unitA.addChild(unitA2);
  const unitB = namespace.createUnit('B');
  const unitB1 = namespace.createUnit('B1');
  const unitB2 = namespace.createUnit('B2');
  unitB.addChild(unitB1);
  unitB.addChild(unitB2);

  const fcDomain = new FcDomain([unitA, unitB]);

  const ecFunction = namespace.createFunction(fcName, fcDescription, fcDomain);
  const assignment = ecFunction.createAssignment(new Values([[unitB, unitB], [unitA, unitA]]));
  const treeNode = ecFunction.node;
  const coverage = assignment.node.getLeafValues().map(x => `(${x.toString()})`);
  const coverageStr = arrayUtils.split(coverage);

  test('EcFunction has assignment', () => expect(ecFunction.Assignments.size).toBeGreaterThan(0));
  test('EcFunction node has type Node', () => expect(treeNode).toBeInstanceOf(TreeNode));
  test('TreeNode has two child', () => expect(treeNode.children?.length).toEqual(2));
  test('TreeNode values has two dimentions', () => expect(treeNode.values.size).toEqual(2));

  test('Assignment should generate correct treeNode', () => expect(assignment.node.toString())
    .toEqual('(B:B|A:A)[(B:B1|A:A)[(B:B1|A:A1),(B:B1|A:A2)],(B:B2|A:A)[(B:B2|A:A1),(B:B2|A:A2)]]'));

  test('Assignment should generate correct values coverage array', () => expect(coverageStr)
    .toEqual('(B:B1|A:A1),(B:B1|A:A2),(B:B2|A:A1),(B:B2|A:A2)'));

  test('EcFunction should generate correct treeNode', () => expect(treeNode.toString())
    .toEqual('(A:A|B:B)[(A:A1|B:B)[(A:A1|B:B1),(A:A1|B:B2)],(A:A2|B:B)[(A:A2|B:B1),(A:A2|B:B2)]]'));

  test('EcFunction', () => expect(namespace.ecFunctions).toHaveLength(1));

  // full outcome vs valueable outcome
  // make unit x unit
  // make unit x function
  // make function x function
  // make unit x query
});
