/**
 * Mocking client-server processing
 */
'use strict';
var Api = exports;
var Promise = require('es6-promise').Promise;
import { falcor } from 'falcor';

Api.getFalcorData = function() {
    return new Promise((resolve) => {
            var model = new falcor.Model({
                source: new falcor.HttpDataSource('/model.json')
            });

            // retrieve the "greeting" key from the root of the Virtual JSON resource
            model.get("greeting").then(function(response) {
                resolve(response.json.greeting)
            });
        })
    }