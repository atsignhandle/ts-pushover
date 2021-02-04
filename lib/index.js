"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pushover_notifications_1 = __importDefault(require("pushover-notifications"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs = __importStar(require("fs"));
dotenv_1.default.config();
const mrwhiskers = './example.jpg';
fs.readFile(mrwhiskers, (err, data) => {
    const p = new pushover_notifications_1.default({
        user: process.env['PUSHOVER_USER'],
        token: process.env['PUSHOVER_TOKEN'],
    });
    const msg = {
        message: 'Pushover from Typescript just happened.',
        title: 'Important Message',
        sound: 'magic',
        device: 'devicename',
        priority: 1,
        file: { name: mrwhiskers, data: data }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p.send(msg, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});
//# sourceMappingURL=index.js.map