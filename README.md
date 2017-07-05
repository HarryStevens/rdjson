[![Build Status](https://travis-ci.org/HarryStevens/rdjson.svg?branch=master)](https://travis-ci.org/HarryStevens/rdjson)[![Coverage Status](https://coveralls.io/repos/github/HarryStevens/rdjson/badge.svg?branch=master)](https://coveralls.io/github/HarryStevens/rdjson?branch=master)

# rdjson

A tiny package that reads and parses JSON files in Node.

## Installation

`npm install rdjson --save`

## Usage

```js
var rdjson = require("rdjson");

var json = rdjson("path/to/file.json");
```

## Tests

`npm test`