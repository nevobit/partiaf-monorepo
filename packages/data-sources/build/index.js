"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataSources = void 0;
const mongoose_1 = require("./mongoose");
const initDataSources = async ({ mongoose, }) => {
    if (mongoose) {
        await (0, mongoose_1.initMongoose)(mongoose);
    }
};
exports.initDataSources = initDataSources;
//# sourceMappingURL=index.js.map