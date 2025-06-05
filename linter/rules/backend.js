const base = require('./base');

module.exports = {
    ...base,

    // Imports
    'simple-import-sort/imports': ['error', {
        'groups': [
            ['^\\u0000'],
            ['.*types.*'],
            ['^\\w'],
            ['^config'],
            ['^tools\/.'],
            ['^share/.'],
            ['^services\/.'],
            ['^helpers\/.'],
            ['^entities\/.'],
            ['.../'],
            ['../'],
            ['./'],
        ],
    }],
};
