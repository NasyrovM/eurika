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
    moduleNameMapper: pathsToModuleNameMapper(config.compilerOptions.paths)
}