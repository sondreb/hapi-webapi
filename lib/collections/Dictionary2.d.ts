export interface IDictionary2 {
    add(key: string, value: any): void;
    remove(key: string): void;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): any[];
}
export declare class Dictionary2 implements IDictionary2 {
    private _keys;
    private _values;
    constructor(init: {
        key: string;
        value: any;
    }[]);
    add(key: string, value: any): void;
    remove(key: string): void;
    keys(): string[];
    values(): any[];
    containsKey(key: string): boolean;
    toLookup(): IDictionary2;
}
