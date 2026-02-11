import { useReducer } from "react";
import type { Todo } from "../types/todo";

const initialState: Todo[] = [];

function reducer(state: Todo[], action: any): Todo[] {
  switch (action.type) {
    case "ADD":
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.text,
        done: false,
      };
      return [newTodo, ...state];

    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD", text: text });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE", id: id });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
