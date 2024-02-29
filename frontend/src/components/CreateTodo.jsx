import { useState } from "react"


export function CreateTodo() {
    
    const [ title, setTitle ] = useState([]);
    const [ description, setDescription ] = useState([]);
    return <div>
        <input type="text" placeholder="title"
         onClick={function(e) {
            setTitle(e.target.value)
            console.log(title)
         }}
        /><br></br>
        <input type="text" placeholder="description"
         onClick={function(e) {
            setTitle(e.target.value)
            console.log(description)
         }}
        /><br></br>
        <button>Add TODO</button> <br></br>
    </div>
}