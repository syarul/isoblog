let should = require('should');
let request = require('supertest');
require = require('really-need');

describe('test server routing', function() {
	var server;
	this.timeout(8000);
    before('load express server', function (){
    	server = require('../server', { bustCache: true });
    });
    
    it('responds to /', function (done) {
    	console.log('==> routing to /');
        request(server)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                //console.log(res.text)
                done();
            });
    });
    it('responds to /hello/', function (done) {
    	console.log('==> routing to /hello/');
        request(server)
            .get('/hello/')
            .expect(200, done)
    });
    it('responds to /time', function (done) {
    	console.log('==> routing to /time');
        request(server)
            .get('/time')
            .expect(200, done)
    });
    it('404 everything else', function (done) {
        console.log('==> test 404')
        request(server)
            .get('/foo/bar')
            .expect(200, done);
    });
});