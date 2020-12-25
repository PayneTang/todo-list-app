import express from 'express';
import mongoose from 'mongoose';
import path from 'path'
import dotenv from 'dotenv';
import todoItemRouter from './routes/TodoItem';

const app = express();
dotenv.config()

// Mongoose settings
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// console.log(process.env.DB_CONNECTION)
app.use('/api/todo', todoItemRouter);

// Front end
const viewPath = __dirname + '/client'
app.use(express.static(viewPath))
app.get("*", (req, res) => {
  res.sendFile(path.join(viewPath, "index.html"));
});

app.listen(5000, () => {
    console.log('Listening on port 5000...');
});
