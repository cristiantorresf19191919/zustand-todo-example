import React from "react";
import { useTodoState } from "../store/todoState";

function TodoListStats() {
  const { computedStats } = useTodoState();
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    computedStats;

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul className="stats">
      <li>Total items </li>
      <span>{totalNum}</span>
      <li>Items completed </li>
      <span>{totalCompletedNum}</span>
      <li>
        Items not completed 
      </li><span>{totalUncompletedNum}</span>
      <li>
        Percent completed <b>%</b> 
      </li>
      <span>{formattedPercentCompleted}</span>
    </ul>
  );
}

export default TodoListStats;
