module.exports = {

    preset: "ts-jest",

    testEnvironment: "node",

    roots: ["<rootDir>/tests"],
    
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    testRegex: "((\\.|/)(test|spec))\\.tsx?$",

    testPathIgnorePatterns: ["/node_modules/", "<rootDir>/dist/", "<rootDir>/node_modules/"],

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};