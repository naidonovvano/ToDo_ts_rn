import React from "react";

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: Todo["id"] | null;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "completed">) => void;
  addTodo: ({ name, description }: Omit<Todo, "id" | "completed">) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  checkTodo: () => {},
  deleteTodo: () => {},
  selectTodoIdForEdit: () => {},
  changeTodo: () => {},
  addTodo: () => {},
});
