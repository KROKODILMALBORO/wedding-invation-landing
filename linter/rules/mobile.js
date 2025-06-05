const frontend = require('./frontend');

module.exports = {
    ...frontend,
    // Imports
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
};
