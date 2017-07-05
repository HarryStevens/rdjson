"use strict";

var expect = require("chai").expect;
var rdjson = require("../index");

describe("#rdjson", function() {

    it("should read and parse JSON", function(){
        var result = rdjson("test/test.json");
        expect(result.length).to.equal(2);
        expect(result[0].name).to.equal("Harry");
        expect(result[0].age - result[1].age).to.equal(5);
    });

});