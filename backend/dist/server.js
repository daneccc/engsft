"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 3000;
try {
    app_1.default.listen(3000, () => {
        console.log(`💫 Server listening on port ${port}`);
        console.log("CTRL + C to exit");
    });
}
catch (ex) {
    console.error(ex);
}
