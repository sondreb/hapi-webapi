"use strict";
class Dictionary2 {
    constructor(init) {
        this._keys = new Array();
        this._values = new Array();
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    add(key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    }
    remove(key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    }
    keys() {
        return this._keys;
    }
    values() {
        return this._values;
    }
    containsKey(key) {
        if (typeof this[key] === "undefined") {
            return false;
        }
        return true;
    }
    toLookup() {
        return this;
    }
}
exports.Dictionary2 = Dictionary2;
//# sourceMappingURL=Dictionary2.js.map