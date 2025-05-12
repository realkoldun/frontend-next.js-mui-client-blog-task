export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(nanoid)/)', 'e2e/*'],
    testPathIgnorePatterns: ['<rootDir>/e2e/'],
};
