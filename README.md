# Eurika

A TypeScript project with comprehensive domain modeling and testing capabilities.

## Features

- **Domain-Driven Design**: Well-structured domain models with TypeScript
- **Comprehensive Testing**: Jest-based test suite with 27 passing tests
- **Code Coverage**: Detailed coverage reporting with HTML output
- **Code Quality**: ESLint integration with TypeScript and Jest support
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

# Lint code
npm run lint

# Lint and fix code automatically
npm run lint:fix

# Check linting with no warnings allowed
npm run lint:check
```

## Code Quality

The project includes comprehensive code quality tools:

### ESLint Configuration

- **TypeScript Support**: Full TypeScript linting with `@typescript-eslint`
- **Jest Integration**: Jest-specific linting rules for test files
- **Code Style**: Consistent formatting with 2-space indentation, single quotes
- **Best Practices**: Modern JavaScript/TypeScript patterns and conventions

### Linting Rules

- **TypeScript**: Strict type checking, no unused variables, proper imports
- **Code Style**: Consistent formatting, proper spacing, semicolons
- **Best Practices**: Prefer const, object shorthand, template literals
- **Jest**: Proper test structure, no focused tests, expect assertions

### Code Quality Scripts

- `npm run lint`: Check code for linting issues
- `npm run lint:fix`: Automatically fix linting issues where possible
- `npm run lint:check`: Strict linting check (no warnings allowed)

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

- **Overall Coverage**: 92.39% statements, 71.42% branches, 81.81% functions, 92.02% lines
- **Test Suites**: 4 total (2 passed, 2 failed - needs test updates)
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
3. Follow code quality standards: `npm run lint:check`
4. Follow TypeScript best practices
5. Add tests for new functionality

## Code Quality Standards

- **ESLint**: All code must pass ESLint checks
- **TypeScript**: Strict type checking enabled
- **Coverage**: Maintain minimum coverage thresholds
- **Formatting**: Consistent code style throughout
- **Documentation**: Clear and comprehensive documentation

## License

This project is part of the Eurika framework.
