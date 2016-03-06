import { StartOptions } from "./StartOptions";
import { IStartup } from "./Startup";
export declare class WebApp {
    private static activeModules(app);
    static getMethods(obj: any): any[];
    static Start<T extends IStartup>(startup: {
        new (): T;
    }, options: StartOptions): void;
}
