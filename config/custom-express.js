var express = require('express')();

var consign = require('consign');

var bodyParser = require('body-parser');

module.exports = function () {

    express.use(bodyParser.urlencoded({extended: true}));
    express.use(bodyParser.json());

    consign()
        .include('routes')
        .into(express);

    return express;

}