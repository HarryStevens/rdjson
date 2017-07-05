"use strict";

/**
 * Reads and parses a JSON file in Node.js
 * @param {string} file
 * @return {object}
 */
module.exports = function(file) {
	var fs = require("fs");
  return JSON.parse(fs.readFileSync(file, "utf8"));
};