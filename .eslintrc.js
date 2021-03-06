module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "babel",
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
    "extends": ["airbnb", "eslint:recommended", "plugin:react/recommended"],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "jasmine": true
    },
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "object-curly-spacing": ["warn", "always"],
        "react/forbid-prop-types": ["error", { "forbid": ["object", "any"] }],
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": 0,
        "semi": ["warn"],
        "comma-dangle": ["warn", "always-multiline"],
        "no-console": ["warn"],
        "no-debugger": ["warn"],
        "no-trailing-spaces": ["warn"],
        "no-constant-condition": [0],
        "no-unused-vars": ["warn"],
        "import/prefer-default-export": 0,
        "react/no-children-prop": 0,
        "jsx-quotes": ["warn", "prefer-double"],
        "no-multi-spaces": ["warn"],
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
        "no-extra-semi": ["warn"],
        "react/prop-types": 1,
    }
};
