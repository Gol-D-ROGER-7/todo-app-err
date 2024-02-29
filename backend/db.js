const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kidin:yoyoyo@cluster0.o8t4pyp.mongodb.net/todo-app--")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}