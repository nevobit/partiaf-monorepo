import { InitMongooseOptions } from "./mongoose";
export interface InitDataSorucesOptions {
    mongoose?: InitMongooseOptions;
}
export declare const initDataSources: ({ mongoose, }: InitDataSorucesOptions) => Promise<void>;
