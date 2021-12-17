import Create from "zustand-store-addons";
import { todoComputed } from "./todoComputed";
import { todoEffects } from "./todoEffects";

const INITIAL_STATE = {
  todoList: [],
  filter: "Show All",
  filterTextLength: 0
};

export const useTodoState = Create(
  (set, get) => ({
    ...INITIAL_STATE,
    effects: todoEffects(set, get),
  }),todoComputed()
);
