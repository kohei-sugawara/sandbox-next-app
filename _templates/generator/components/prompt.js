module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'select directory',
    choices: ['projects', 'ui'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'input component name',
    validate: input => input !== '',
  },
];
