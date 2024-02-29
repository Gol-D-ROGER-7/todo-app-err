const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();


app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs for creating a TODO"
        })
        return
    }
    // put it in mongoDb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "TODO created"
    })
})

app.get("/todos", async function(req, res)  {
    const response = await todo.find()
    res.json({
        response: response
    })
})

app.put("/completed", async function(req, res)  {
    const updatePayload = req.body;
    const parseUpdatedPayload = updateTodo.safeParse(updatePayload)
    if(!parseUpdatedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs for updating a TODO"
        })
        return
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "TODO marked as completed"
    })

})

app.listen(3000)