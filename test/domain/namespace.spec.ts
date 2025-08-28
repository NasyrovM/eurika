import { Namespace } from '~/domain/Namespace';
import { FcDomain } from '~/domain/EcFunction';

describe('Namespace', () => {
  let namespace: Namespace;

  beforeEach(() => {
    namespace = Namespace.createNamespace('Test Namespace', 'Test Description');
  });

  test('should create a namespace with correct properties', () => {
    expect(namespace.name).toBe('Test Namespace');
    expect(namespace.description).toBe('Test Description');
  });

  describe('createUnit', () => {
    test('should create a unit with default values', () => {
      const unit = namespace.createUnit();
      expect(unit.name).toBe('unnamed unit');
      expect(unit.content).toBe('');
    });

    test('should create a unit with custom values', () => {
      const unit = namespace.createUnit('Custom Unit', 'Custom Content');
      expect(unit.name).toBe('Custom Unit');
      expect(unit.content).toBe('Custom Content');
    });
  });

  describe('createFunction', () => {
    test('should create a function with default values', () => {
      const domain: FcDomain = new Set();
      const func = namespace.createFunction('func name', 'func description', domain);
      expect(func.description).toBe('func description');
      expect(func.name).toBe('func name');
    });

    test('should create a function with custom values', () => {
      const domain: FcDomain = new Set();
      const func = namespace.createFunction('Custom Function', 'Custom Description', domain);
      expect(func.name).toBe('Custom Function');
      expect(func.description).toBe('Custom Description');
    });
  });
});
