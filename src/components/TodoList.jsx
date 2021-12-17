import React from "react";
import { useTodoState } from "../store/todoState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoItemsFilter";
import TodoListStats from "./TodoListStats";

function TodoList() {

  const state = useTodoState();
  console.log("🚀 ~ file: TodoList.jsx ~ line 11 ~ TodoList ~ state", state)
  
  const { filteredTodoList } = state;

  return (
    <div>
      <TodoListFilters />
      <br />
      <TodoItemCreator />
      <div className="row-2">
        <TodoListStats />
        <div className="todo-list">
          {filteredTodoList &&
            filteredTodoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
