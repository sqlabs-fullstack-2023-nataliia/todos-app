import { create } from "zustand";
import TodoModel from "../models/TodoModel";

interface TosoStore {
    todos: TodoModel[],
    addTodo: (todo: TodoModel) => void,
    updateTodo: (todo: TodoModel) => void,
    deleteTodo: (id: number) => void,
}

export const useTodoStore = create<TosoStore>((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    updateTodo: (update) => set((state) => ({ todos: state.todos.map((todo) => (todo.id === update.id ? { ...todo, ...update } : todo)), })),
    deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id), })),
}))