var express = require('express')();

var consign = require('consign');

var bodyParser = require('body-parser');

express.use(bodyParser.urlencoded({extended: true}));
express.use(bodyParser.json());

consign()
    .include('routes')
    .into(express);

module.exports = function () {

    return express;

}