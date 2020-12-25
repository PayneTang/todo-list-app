"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const TodoItem_1 = __importDefault(require("./routes/TodoItem"));
const app = express_1.default();
dotenv_1.default.config();
// Mongoose settings
mongoose_1.default.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!");
});
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// console.log(process.env.DB_CONNECTION)
app.use('/api/todo', TodoItem_1.default);
// Front end
const viewPath = __dirname + '/client';
app.use(express_1.default.static(viewPath));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(viewPath, "index.html"));
});
app.listen(5000, () => {
    console.log('Listening on port 5000...');
});
//# sourceMappingURL=app.js.map