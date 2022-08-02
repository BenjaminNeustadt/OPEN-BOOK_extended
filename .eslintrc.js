module.exports = {
    "env": {
        "jest": true,
        "node": true,
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "cypress/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    },
    "plugins": [
        "cypress"
      ]
}
