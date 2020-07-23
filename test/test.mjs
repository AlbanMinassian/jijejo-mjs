// import path from 'path';
// const __dirname = path.dirname(import.meta.url).replace("file://", "");

import jijejo_spec from 'jijejo-spec'
import { jsonin, jsonerr, jsonout, jicheck, jecheck, jocheck } from '../build/index.mjs';
import { default as chai } from 'chai';
const expect = chai.expect;

describe('jijejo-spec', function() {

    // each test
    for (let [key_test, item_test] of Object.entries(jijejo_spec.tests["jijejo.utils.test.json"])) {

        // if (key_test !== "test_jsonin_two_param") { continue; }

        // each example (of this key_test)
        for (let [key_example, item_example] of Object.entries(item_test.examples)) {

            const title = item_example.title.replace("<title>", key_example.title);
            let actual_result = null;

            // test
            it(title, function () {

                // ----------------------------------------------------------------------------
                // actual
                // ----------------------------------------------------------------------------
                try{

                    // swith "given"
                    if (item_test.given === "jsonin") {
                        if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true && item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jsonin(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jsonin(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jsonin(item_example.param1json)
                        } else {
                            actual_result = jsonin()
                        }
                    } else if (item_test.given === "jsonerr") {
                        if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true && item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jsonerr(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jsonerr(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jsonerr(item_example.param1json)
                        } else {
                            actual_result = jsonerr()
                        }
                    } else if (item_test.given === "jsonout") {
                        if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true && item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jsonout(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jsonout(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jsonout(item_example.param1json)
                        } else {
                            actual_result = jsonout()
                        }
                    } else if (item_test.given === "jicheck") {
                        if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true && item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jicheck(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jicheck(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jicheck(item_example.param1json)
                        } else {
                            actual_result = jicheck()
                        }
                    } else if (item_test.given === "jecheck") {
                        if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true && item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jecheck(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true && item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jecheck(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jecheck(item_example.param1json)
                        } else {
                            actual_result = jecheck()
                        }
                    } else if (item_test.given === "jocheck") {
                        if (item_example.hasOwnProperty("param1json") === true, item_example.hasOwnProperty("param2json") === true === true, item_example.hasOwnProperty("param3json") === true) {
                            actual_result = jocheck(item_example.param1json, item_example.param2json, item_example.param3json)
                        } else if (item_example.hasOwnProperty("param1json") === true, item_example.hasOwnProperty("param2json") === true) {
                            actual_result = jocheck(item_example.param1json, item_example.param2json)
                        } else if (item_example.hasOwnProperty("param1json") === true) {
                            actual_result = jocheck(item_example.param1json)
                        } else {
                            actual_result = jocheck()
                        }
                    } else {
                        throw new Error(`@todo jijejo.utils.test.json#["${key_test}"]["${key_example}"]["given"]="${item_test.given}"`)
                    }

                } catch(err) {
                    actual_result = err;
                }

                // ----------------------------------------------------------------------------
                // expect
                // ----------------------------------------------------------------------------
                if (item_example.hasOwnProperty("expectjson") === true) {
                    // expect json
                    expect(actual_result).to.deep.equal(item_example.expectjson)
                } else if (item_example.hasOwnProperty("expecterror") === true) {
                    // expect error
                    // const result_error = actual_result
                    // expect(actual_result).to.deep.equal(item_example.expecterror.message)
                    expect(actual_result.message).to.equal(item_example.expecterror.message)
                } else {
                    throw new Error(`@todo jijejo.utils.test.json#["${key_test}"]["${key_example}"] unknow expect, actual=${JSON.stringify(item_example)}`)
                }

            });

        }

    }

});
