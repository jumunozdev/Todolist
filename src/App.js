import { TodoCounter } from "./TodoCounter";

import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";
import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoNav } from "./TodoNav";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoNav />
      <TodoForm />
      <TodoList>
        <TodoCounter completed={10} total={20} />
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
     

     
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
