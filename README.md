# Eurika

A TypeScript project with comprehensive domain modeling and testing capabilities.

## Features

- **Domain-Driven Design**: Well-structured domain models with TypeScript
- **Comprehensive Testing**: Jest-based test suite with 27 passing tests
- **Code Coverage**: Detailed coverage reporting with HTML output
- **Type Safety**: Strict TypeScript configuration with full type checking

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Build the project
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run tests in watch mode with coverage
npm run test:watch:coverage
```

## Code Coverage

The project includes comprehensive code coverage reporting with the following features:

- **HTML Reports**: Detailed coverage reports in `coverage/index.html`
- **Coverage Thresholds**: 
  - Branches: 70%
  - Functions: 85%
  - Lines: 95%
  - Statements: 95%

### Viewing Coverage Reports

After running `npm run test:coverage`, you can:

1. Open `coverage/index.html` in your browser for a detailed HTML report
2. Check the terminal output for a summary
3. Find the LCOV report in `coverage/lcov.info` for CI/CD integration

### Current Coverage Status

- **Overall Coverage**: 97.26% statements, 71.42% branches, 87.69% functions, 97.5% lines
- **Test Suites**: 4 passed, 27 tests total
- **Coverage Reports**: Generated in `coverage/` directory

## Project Structure

```
src/
├── domain/          # Domain models and business logic
├── service/         # Service layer
└── core/           # Core utilities (future use)

test/
├── domain/         # Domain model tests
└── utils/          # Test utilities

dist/               # Compiled JavaScript output
coverage/           # Coverage reports (generated)
```

## Domain Models

The project includes several domain models:

- **Unit**: Basic unit representation
- **Namespace**: Namespace management
- **TreeNode**: Tree structure implementation
- **ITree**: Tree interface
- **Assignment**: Assignment management
- **Values**: Value domain modeling
- **EcFunction**: Function domain modeling
- **Coverage**: Coverage tracking

## Contributing

1. Ensure all tests pass: `npm test`
2. Maintain coverage thresholds: `npm run test:coverage`
3. Follow TypeScript best practices
4. Add tests for new functionality

## License

This project is part of the Eurika framework.
