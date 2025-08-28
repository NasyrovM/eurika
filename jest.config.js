import { pathsToModuleNameMapper } from 'ts-jest';
import config from './tsconfig.json' with {type: "json"};

export default {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["<rootDir>/test/**/*.spec.ts"],
    roots: ["<rootDir>/test"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "<rootDir>/dist/", "<rootDir>/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    // this enables us to use tsconfig-paths with jest
    modulePaths: [config.compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(config.compilerOptions.paths),
    // Coverage configuration
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/test/",
        "/coverage/"
    ],
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*.d.ts",
        "!src/**/*.spec.ts",
        "!src/**/*.test.ts"
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 85,
            lines: 95,
            statements: 95
        }
    }
}