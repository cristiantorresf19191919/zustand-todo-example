export const todoComputed = () => {
  function computedStats() {
    const todoList = this.todoList;
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  }
  function filteredTodoList() {
    switch (this.filter) {
      case "Show Completed":
        return this.todoList.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return this.todoList.filter((item) => !item.isComplete);
      default:
        return this.todoList;
    }
  }
  return {
    computed: {
      filteredTodoList,
      computedStats
    },
    watchers:{
        filter(newFilter,prevFilter){
            this.set({filterTextLength:newFilter.length})
        }
    }
  };
};
