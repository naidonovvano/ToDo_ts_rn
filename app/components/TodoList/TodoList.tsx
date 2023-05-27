import React, { FC } from "react";
import { useTodo } from "../../utils";
import { TodoPanel } from "../TodoPanel/TodoPanel";
import { TodoItem } from "./TodoItem/TodoItem";
import { ScrollView } from "react-native";

export const TodoList: FC = () => {
  const { todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit } =
    useTodo();
  return (
    <ScrollView>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return <TodoPanel key={todo.id} mode="edit" editTodo={todo} />;
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </ScrollView>
  );
};
