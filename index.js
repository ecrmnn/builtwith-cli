#! /usr/bin/env node

'use strict';

const builtWith = require('builtwith');
const program = require('commander');
const pckg = require('./package.json');
const Table = require('cli-table');

const render = function (techProfile) {
  const table = new Table({head: ['Topic', 'Tool']});

  for (const attribute in techProfile) {
    techProfile[attribute].forEach(function (tool) {
      table.push([attribute, tool.title]);
    });
  }

  console.log(table.toString());
}

program.version(pckg.version, '-v, --version')
  .arguments('<domain>')
  .action(function (domain) {
    builtWith(domain)
      .then(response => {
        render(response);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .parse(process.argv);

if (!program.args[0]) {
  return console.log('No domain given. Please try: bw random-domain.com');
}