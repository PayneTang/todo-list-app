"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TodoItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: null
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose.model("TodoItem", TodoItemSchema);
//# sourceMappingURL=TodoItem.js.map