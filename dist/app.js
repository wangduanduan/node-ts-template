"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = fastify_1.default({
    logger: true
});
app.get('/', (req, res) => {
    res.send({ hello: 'world' });
});
exports.default = app;
//# sourceMappingURL=app.js.map