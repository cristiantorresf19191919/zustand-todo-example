import React from "react";
import { useTodoState } from "../store/todoState";

function TodoItemCreator() {
  const [inputValue, setInputValue] = React.useState("");
  const { todoList, effects } = useTodoState();
  const { setTodoList } = effects;

  const addItem = () => {
    const todoListAdded = [
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ];
    setTodoList(todoListAdded);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
