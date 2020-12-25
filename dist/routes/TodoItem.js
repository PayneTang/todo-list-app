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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodoItem_1 = __importDefault(require("../models/TodoItem"));
const router = express_1.default.Router();
// Returns all thoughts
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoItem = yield TodoItem_1.default.find().sort("field -created");
        res.json(todoItem);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Submit a post
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoItem = new TodoItem_1.default({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const savedTodoItem = yield todoItem.save();
        res.json(savedTodoItem);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Specific thought
router.get("/:todoItemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoItem = yield TodoItem_1.default.findById(req.params.todoItemId);
        res.json(todoItem);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Delete thought
router.delete("/:todoItemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removedTodoItem = yield TodoItem_1.default.deleteOne({
            _id: req.params.todoItemId
        });
        res.json(removedTodoItem);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Update a thought
router.patch("/:todoItemId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const updateTodoItem = yield TodoItem_1.default.updateOne({ _id: req.params.todoItemId }, { $set: { title: req.body.title, content: req.body.content, completed: req.body.completed } });
        res.json(updateTodoItem);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
exports.default = router;
//# sourceMappingURL=TodoItem.js.map