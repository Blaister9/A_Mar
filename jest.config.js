module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    //setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
