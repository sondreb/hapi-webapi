"use strict";

interface IDictionary<TKey, TValue> {
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    keys(): TKey[];
    values(): TValue[];
}

class Dictionary<TKey extends string, TValue> {

    private _keys: TKey[] = new Array<TKey>();
    private _values: TValue[] = new Array<TValue>();

    /*
        constructor(init: { key: string; value: any; }[]) {
    
            for (var x = 0; x < init.length; x++) {
                this[init[x].key] = init[x].value;
                this._keys.push(init[x].key);
                this._values.push(init[x].value);
            }
        }*/

    add(key: TKey, value: TValue) {
        this[String(key)] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: TKey) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[String(key)];
    }

    keys(): TKey[] {
        return this._keys;
    }

    values(): TValue[] {
        return this._values;
    }

    containsKey(key: TKey) {
        if (typeof this[String(key)] === "undefined") {
            return false;
        }

        return true;
    }

    /*
        containsKey(key: TKey) {
            return this._keys.indexOf(key, 0) > -1;
        }*/

    /*
    toLookup(): IDictionary {
        return this;
    }*/
}