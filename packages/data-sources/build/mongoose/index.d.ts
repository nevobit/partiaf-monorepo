export interface InitMongooseOptions {
    mongoUrl?: string;
}
export declare const initMongoose: ({ mongoUrl }: InitMongooseOptions) => Promise<void>;
