module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
    rules: {
        'import/prefer-default-export': ['off'],
    },
}
