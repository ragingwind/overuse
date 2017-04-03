#!/usr/bin/env node
'use strict';
const meow = require('meow');
const overuse = require('.');

const cli = meow(`
	Usage
	  $ overuse [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ overuse
	  unicorns & rainbows
	  $ overuse ponies
	  ponies & rainbows
`);

console.log(overuse(cli.input[0] || 'unicorns'));
