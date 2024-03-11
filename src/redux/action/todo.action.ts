import { ADD_TODO, Todo, TOGGLE_TODO } from "../types/todo.type";

export const addTodo = (text: string) => ({
    type: ADD_TODO as typeof ADD_TODO,
    payload: {
      id: new Date().getTime(),
      text,
      completed: false,
    } as Todo,
  });
  
  export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO as typeof TOGGLE_TODO,
    payload: id,
  });
  