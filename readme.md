# overuse [![Build Status](https://travis-ci.org/ragingwind/overuse.svg?branch=master)](https://travis-ci.org/ragingwind/overuse)

> As a boilerplate, to reduce many of steps for saving of time while developing


## Install

```
$ npm install --save overuse
```


## Usage

```js
const overuse = require('overuse');

overuse('unicorns');
//=> 'unicorns & rainbows'
```


## API

### overuse(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global overuse
```

```
$ overuse --help

  Usage
    overuse [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ overuse
    unicorns & rainbows
    $ overuse ponies
    ponies & rainbows
```


## License

MIT © [ragingwind](http://ragingwind.me)
