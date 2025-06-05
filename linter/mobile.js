const frontend = require('./frontend');
const rules = require('./rules/mobile');

module.exports = {
    ...frontend,
    rules,
};
