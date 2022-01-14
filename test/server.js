/**
 * @description jest server
 * @author vagabond
 */

const request = require('supertest')
const server = require('../src/app').callback;

module.exports = request(server);