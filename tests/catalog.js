'use strict';

import fs from 'fs';
import path from 'path';

import 'regenerator/runtime';
import chai from 'chai';
import jsonschema from 'jsonschema';

import schema from './schema';
import entries from '../tools/entries';
import deindent from '../tools/deindent';

let expect = chai.expect,
    assert = chai.assert;

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

                        for (let item of source) {
                            let name = item.name.split('/')[0],
                                config = '';

                            switch (item.type) {
                                case 'npm':
                                    config = require('../../package.json');

                                    if (!(name in config.dependencies)) {
                                        assert.notOk(deindent `Could not find "${name}"
                                            in package.json dependencies`);
                                    }

                                    if (config.bundleDependencies.indexOf(name) === -1) {
                                        assert.notOk(deindent` Could not find "${name}"
                                            in package.json bundleDependencies`);
                                    }

                                    break;

                                case 'bower':
                                    config = require('../../bower.json');

                                    if (!(name in config.dependencies)) {
                                        assert.notOk(deindent `Could not find "${name}"
                                            in bower.json dependencies`);
                                    }

                                    break;
                            }
                        }

                        break;

                    case 'index.json':
                        for (let [key, value] of entries(source)) {
                            exception(schema.config.properties[key], value, key);
                        }

                        break;
                }
            }
        });
    }
});
