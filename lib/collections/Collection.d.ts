export declare class Collection<T> {
    private _items;
    getItems(): any[];
    getItem(index: number): T;
    count(): number;
    add(item: T): void;
    delete(itemIndex: number): void;
    indexOfItem(obj: T, fromIndex?: number): number;
}
