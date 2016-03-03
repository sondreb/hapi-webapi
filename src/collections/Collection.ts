//A typescript implementation of a generic Collection
"use strict";

class Collection<T> {

    // The underlying array data structure of the collection
    private _items = [];

    // Get the collection as an array
    public getItems() {
        return this._items;
    }

    // Get a specific item from a collection given it's index
    public getItem(index: number): T {
        return this._items[index];
    }

    // Length of the collection
    public count() { return this._items.length; }

    // Add an object to the collection
    public add(item: T) {
        this._items.push(item);
    }

    // Delete an object from the collection
    public delete(itemIndex: number) {
        this._items.splice(itemIndex, 1);
    }

    // Find the index of a given object in a collection
    public indexOfItem(obj: T, fromIndex?: number): number {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this._items.length + fromIndex);
        }
        for (var i = fromIndex, j = this._items.length; i < j; i++) {
            if (this._items[i] === obj)
                return i;
        }
        return -1;
    }
}