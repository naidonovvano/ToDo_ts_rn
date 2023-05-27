import React, { FC, useState } from "react";
import { useTodo } from "../../utils";
import { gStyles } from "../../../style";
import { View, Text, Pressable } from "react-native";
import { TodoPanel } from "../TodoPanel/TodoPanel";

export const Header: FC = () => {
  const { todos } = useTodo();
  const [togglePanel, setTogglePanel] = useState(false);
  const [buttonText, setButtonText] = useState("Enable");

  const handlePanel = () => {
    setTogglePanel(!togglePanel);
    togglePanel ? setButtonText("Enable") : setButtonText("Disable");
  };

  return (
    <View style={gStyles.header}>
      <Text style={gStyles.headerTitle}>
        ToDo list contains: {todos.length} task{todos.length === 1 ? "" : "s"}
      </Text>
      <Pressable onPress={handlePanel} style={gStyles.headerButton}>
        <Text style={[gStyles.taskText, { textAlign: "center" }]}>
          {buttonText} panel
        </Text>
      </Pressable>
      {togglePanel && <TodoPanel mode="add" />}
    </View>
  );
};
