"use strict";
class Collection {
    constructor() {
        this._items = [];
    }
    getItems() {
        return this._items;
    }
    getItem(index) {
        return this._items[index];
    }
    count() { return this._items.length; }
    add(item) {
        this._items.push(item);
    }
    delete(itemIndex) {
        this._items.splice(itemIndex, 1);
    }
    indexOfItem(obj, fromIndex) {
        if (fromIndex == null) {
            fromIndex = 0;
        }
        else if (fromIndex < 0) {
            fromIndex = Math.max(0, this._items.length + fromIndex);
        }
        for (var i = fromIndex, j = this._items.length; i < j; i++) {
            if (this._items[i] === obj)
                return i;
        }
        return -1;
    }
}
exports.Collection = Collection;
