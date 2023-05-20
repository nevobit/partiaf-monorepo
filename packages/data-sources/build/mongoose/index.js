"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMongoose = void 0;
const mongoose_1 = require("mongoose");
const initMongoose = async ({ mongoUrl }) => {
    const conn = mongoose_1.connection;
    const connectionUrl = mongoUrl || '';
    conn.on('error', (err) => {
        console.error(`Error on mongoose connection: ${JSON.stringify(err)}`);
        throw new Error(err);
    });
    conn.on('connected', () => {
        console.info(`Mongoose connection: ${connectionUrl}`);
    });
    conn.on('reconnectedFailed', () => {
        console.error(`Mongoose: DB Connection Lost, retries failed`);
    });
    await (0, mongoose_1.connect)(connectionUrl, {
        autoIndex: true
    });
};
exports.initMongoose = initMongoose;
//# sourceMappingURL=index.js.map