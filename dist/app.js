"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("./user/user.router"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome, EduNotes Server!!');
});
app.use("/api/auth", user_router_1.default);
// Global Error Handler
app.use(errorHandler_1.default);
exports.default = app;
