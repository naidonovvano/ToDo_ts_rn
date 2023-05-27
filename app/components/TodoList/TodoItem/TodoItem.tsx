import React, { FC } from "react";
import { Button } from "../../Button/Button";
import { View, Text, Pressable } from "react-native";
import { gStyles } from "../../../../style";

export interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => {
  return (
    <View
      style={[
        gStyles.todoPanelContainer,
        {
          backgroundColor: todo.completed
            ? "rgba(240, 252, 252, 0.7)"
            : "rgba(210, 240, 240, 0.9)",
        },
      ]}
    >
      <Pressable
        onPress={() => checkTodo(todo.id)}
        style={{ opacity: todo.completed ? 0.5 : 1 }}
      >
        <Text
          style={[
            gStyles.todoItemText,
            {
              fontSize: 25,
              fontFamily: "ArvoBold",
              textDecorationLine: todo.completed ? "line-through" : "none",
            },
          ]}
        >
          {todo.name}
        </Text>
        <Text
          style={[
            gStyles.todoItemText,
            { textDecorationLine: todo.completed ? "line-through" : "none" },
          ]}
        >
          {todo.description}
        </Text>
      </Pressable>
      <View style={gStyles.todoItemButtonContainer}>
        <Button color="green" onPress={() => selectTodoIdForEdit(todo.id)}>
          <Text style={{ fontFamily: "ArvoRegular" }}>EDIT</Text>
        </Button>
        <Button color="red" onPress={() => deleteTodo(todo.id)}>
          <Text style={{ fontFamily: "ArvoRegular" }}>DELETE</Text>
        </Button>
      </View>
    </View>
  );
};
