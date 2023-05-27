import { ReactNode, useState, useCallback, useMemo } from "react";
import uuid from "react-native-uuid";
import { TodoContext } from "./TodoContext";

const DEFAULT_TODO_LIST = [
  {
    id: uuid.v4(),
    name: "WEB",
    description: "Internet, HTTP, browser",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "HTML",
    description: "Basics, semantic, forms and validations",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "CSS",
    description: "Basics, layouts, media queries",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "JavaScript",
    description: "Syntax, DOM manipulation, ES6",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "Git",
    description: "GitHub, GitLab",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "React Fundamentals",
    description: "Components, life cycle, hooks, props, state, routing",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "React Advanced",
    description: "Advanced hooks, state management, API calls, HOC",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "TypeScript",
    description: "Syntax, compiler, language service",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "Algorithms",
    description: "Algorithms, data structures",
    completed: false,
  },
  {
    id: uuid.v4(),
    name: "React Native",
    description: "Components, syntax, Expo CLI, 3rd party libraries",
    completed: false,
  },
];

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

  const addTodo = useCallback(
    ({ name, description }: Omit<Todo, "completed" | "id">) => {
      if (name === "" || description === "") return 0;
      setTodos([
        ...todos,
        { id: uuid.v4(), description, name, completed: false },
      ]);
    },
    [todos]
  );

  const checkTodo = useCallback(
    (id: Todo["id"]) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (id: Todo["id"]) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const selectTodoIdForEdit = useCallback((id: Todo["id"]) => {
    setTodoIdForEdit(id);
  }, []);

  const changeTodo = useCallback(
    ({ name, description }: Omit<Todo, "completed" | "id">) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoIdForEdit ? { ...todo, name, description } : todo
        )
      );
      setTodoIdForEdit(null);
    },
    [todos, todoIdForEdit]
  );

  const value = useMemo(
    () => ({
      todos,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      todoIdForEdit,
      changeTodo,
      addTodo,
    }),
    [
      todos,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      todoIdForEdit,
      changeTodo,
      addTodo,
    ]
  );
  // @ts-ignore
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}; //@ts-ignore
