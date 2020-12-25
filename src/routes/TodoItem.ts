import express from 'express';
import TodoItem from '../models/TodoItem';

const router = express.Router();

// Returns all thoughts
router.get("/", async (req, res) => {
  try {
    const todoItem = await TodoItem.find().sort("field -created");
    res.json(todoItem);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a post
router.post("/", async (req, res) => {
  const todoItem = new TodoItem({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const savedTodoItem = await todoItem.save();
    res.json(savedTodoItem);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific thought
router.get("/:todoItemId", async (req, res) => {
  try {
    const todoItem = await TodoItem.findById(req.params.todoItemId);
    res.json(todoItem);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete thought
router.delete("/:todoItemId", async (req, res) => {
  try {
    const removedTodoItem = await TodoItem.deleteOne({
      _id: req.params.todoItemId
    });
    res.json(removedTodoItem);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a thought
router.patch("/:todoItemId", async (req, res) => {
  try {
    console.log(req.body)
    const updateTodoItem = await TodoItem.updateOne(
      { _id: req.params.todoItemId },
      { $set: { title: req.body.title, content: req.body.content, completed: req.body.completed } }
    );
    res.json(updateTodoItem);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;