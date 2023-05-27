declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

type Todo = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
};
