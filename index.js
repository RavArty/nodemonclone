#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');

program
  .version('0.0.1')
  .argument('[filename]', 'Name of file to execute')
  .action(args => {
    const start = debounce(() => {
      console.log('STARTING USER PROGRAM');
    }, 100);

    chokidar
      .watch('.')
      .on('add', () => console.log('file added'))
      .on('change', () => console.log('file changed'));
  });

program.parse(process.env);
