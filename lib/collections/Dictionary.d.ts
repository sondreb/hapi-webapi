export interface IDictionary<TKey, TValue> {
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    keys(): TKey[];
    values(): TValue[];
}
export declare class Dictionary<TKey extends string, TValue> {
    private _keys;
    private _values;
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    keys(): TKey[];
    values(): TValue[];
    containsKey(key: TKey): boolean;
}
