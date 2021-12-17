export const todoEffects = (set, get) => {
  function setTodoList(items) {
    set({ todoList: items });
  }
  function setFilter(value) {
    set({ filter: value });
  }
  return {
    setTodoList,
    setFilter,
  };
};
