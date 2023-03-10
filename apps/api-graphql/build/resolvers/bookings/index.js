"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("@partiaf/business-logic/build");
exports.default = {
    Query: {
        getMyBookings(_, { uuid }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const tickets = yield (0, build_1.getBookingsByUser)(uuid);
                return tickets;
            });
        },
    },
    Mutation: {
        createBooking(_, { data }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const booking = yield (0, build_1.createBooking)(data);
                return booking;
            });
        },
    },
};
