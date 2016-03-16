"use strict";
class Dictionary {
    constructor() {
        this._keys = new Array();
        this._values = new Array();
    }
    add(key, value) {
        this[String(key)] = value;
        this._keys.push(key);
        this._values.push(value);
    }
    remove(key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[String(key)];
    }
    keys() {
        return this._keys;
    }
    values() {
        return this._values;
    }
    containsKey(key) {
        if (typeof this[String(key)] === "undefined") {
            return false;
        }
        return true;
    }
}
exports.Dictionary = Dictionary;
