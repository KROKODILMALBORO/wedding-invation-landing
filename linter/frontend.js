const base = require('./base');
const rules = require('./rules/frontend');

module.exports = {
    ...base,
    settings: {
        ...base.settings,
        'react': {
            'version': '17.0.3',
        },
    },
    plugins: [
        ...base.plugins,
        'react',
        'react-hooks',
    ],
    extends: [
        ...base.extends,
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules,
};
