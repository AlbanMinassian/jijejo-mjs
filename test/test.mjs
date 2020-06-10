// import path from 'path';
// const __dirname = path.dirname(import.meta.url).replace("file://", "");

import jijejo_spec from 'jijejo-spec'
import jijejo_node from '../build/index.mjs';
import jsonin from '../build/jsonin.mjs';
import jsonout from '../build/jsonout.mjs';
import jsonerr from '../build/jsonerr.mjs';
import { default as chai } from 'chai';
const expect = chai.expect;

describe('jijejo-node', function() {

    const result_object_keys = Object.keys(jijejo_node);
    expect(result_object_keys).to.have.members(["jsonin", "jsonerr", "jsonout"]);

});

describe('jijejo-spec', function() {

    // each test
    for (let [key_test, item_test] of Object.entries(jijejo_spec.tests["jijejo.utils.test.json"])) {

        // each example (of this key_test)
        for (let [key_example, item_example] of Object.entries(item_test.examples)) {

            const title = item_example.title.replace("<title>", key_example.title);
            let actual_result = null;

            // test
            it(title, function () {

                // swith "given"
                if (item_test.given === "jsonin") {
                    if (item_example.hasOwnProperty("param1") === true) {
                        actual_result = jsonin(item_example.param1)
                    } else {
                        actual_result = jsonin()
                    }
                } else if (item_test.given === "jsonerr") {
                    if (item_example.hasOwnProperty("param1") === true) {
                        actual_result = jsonerr(item_example.param1)
                    } else {
                        actual_result = jsonerr()
                    }
                } else if (item_test.given === "jsonout") {
                    if (item_example.hasOwnProperty("param1") === true) {
                        actual_result = jsonout(item_example.param1)
                    } else {
                        actual_result = jsonout()
                    }
                } else {
                    throw new Error(`@todo jijejo.utils.test.json#["${key_test}"]["${key_example}"]["given"]="${item_test.given}"`)
                }

                // expect
                expect(actual_result).to.deep.equal(item_example.expect)

            });

        }

    }

});
