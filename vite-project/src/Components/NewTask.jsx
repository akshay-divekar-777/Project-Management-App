import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        value={enteredTask}
        className="w-64 px-2 pu-1 rounded-sm bg-stone-200"
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover: text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
