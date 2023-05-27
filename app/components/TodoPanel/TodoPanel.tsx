import React, { useState, FC, useRef } from "react";
import { Button } from "../Button/Button";
import { useTodo } from "../../utils";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { gStyles } from "../../../style";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodoPanelProps {
  mode: "add";
}
interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "completed">;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: FC<TodoPanelProps> = (props) => {
  const { changeTodo, addTodo } = useTodo();
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const nameInputRef = useRef<TextInput>(null);
  const descriptionInputRef = useRef<TextInput>(null);

  const onPress = () => {
    if (isEdit) return changeTodo(todo);
    addTodo(todo);
    setTodo(DEFAULT_TODO);
    if (nameInputRef.current && descriptionInputRef.current) {
      nameInputRef.current.clear();
      descriptionInputRef.current.clear();
    }
  };

  const onChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    ref: string
  ): void => {
    const value = event.nativeEvent.text;
    setTodo({ ...todo, [ref]: value });
  };

  return (
    <View
      style={[
        gStyles.todoPanelContainer,
        {
          backgroundColor: isEdit
            ? "rgba(176, 250, 167, 0.8)"
            : "rgba(210, 240, 240, 0.9)",
          marginTop: 0,
        },
      ]}
    >
      <View style={gStyles.todoPanelSection}>
        <Text style={gStyles.taskText}>Task name</Text>
        <TextInput
          ref={nameInputRef}
          defaultValue={todo.name}
          onChange={(event) => onChange(event, "name")}
          style={[gStyles.input, gStyles.taskText]}
        />
      </View>
      <View style={gStyles.todoPanelSection}>
        <Text style={gStyles.taskText}>Description</Text>
        <TextInput
          ref={descriptionInputRef}
          defaultValue={todo.description}
          onChange={(event) => onChange(event, "description")}
          style={[gStyles.input, gStyles.taskText]}
        />
      </View>
      <View style={[gStyles.todoItemButtonContainer, { marginTop: 20 }]}>
        {!isEdit && (
          <Button color="blue" onPress={onPress}>
            <Text>ADD</Text>
          </Button>
        )}
        {isEdit && (
          <Button color="green" onPress={onPress}>
            <Text>EDIT</Text>
          </Button>
        )}
      </View>
    </View>
  );
};
