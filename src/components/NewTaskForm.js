import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
// setting our text state 
const [text,setText] = useState("")
// setting our category state 
const [category,setCategory] = useState("code")
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
