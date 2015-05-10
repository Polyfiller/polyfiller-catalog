'use strict';

import fs from 'fs';
import path from 'path';

import 'regenerator/runtime';
import chai from 'chai';
import jsonschema from 'jsonschema';

import schema from './schema';
import entries from '../utils/entries';

let expect = chai.expect,
    assert = chai.assert;

/** Functional tests */
describe('catalog', () => {
    let catalog = fs.readdirSync('./files'),
        $schema = new (jsonschema.Validator)();

    let exception = (object, value, key = '') => {
        let block = $schema.validate(value, object);

        for (let error of block.errors) {
            assert.notOk(JSON.stringify(error.schema),
                `bad property "${key}"`);
        }
    }

    for (let feature of catalog) {
        it(feature, () => {
            let required = ['index.js', 'index.json'];

            for (let file of required) {
                let source = require(`../files/${feature}/${file}`);

                switch (file) {
                    case 'index.js':
                        exception(schema.source, source);
                        break;

                    case 'index.js':
                        for (let [key, value] of entries(source)) {
                            exception(schema.config.properties[key], value, key);
                        }

                        break;
                }
            }
        });
    }
});
