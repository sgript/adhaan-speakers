module.exports = {
    moduleNameMapper: {
        '^@api/(.*)$': '<rootDir>/src/api/$1'
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};