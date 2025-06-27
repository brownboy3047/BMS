import React from "react";
import { useNavigate } from "react-router-dom";
import TheTasksTable from "./TheTasksTable";
import { tasks } from "../data/tasks";

const TaskTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f9fa] shadow-md rounded-md border p-6 mt-16">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Tasks</h1>

        <button
          onClick={() => navigate("/tasks")}
          className="capitalize text-white bg-secondary hover:text-neutral-700 py-2 px-3 font-bold rounded"
        >
          Open Tasks
        </button>
      </div>

      <div className="overflow-x-auto bg-[#f8f9fa] shadow-md">
        <p className="text-sm pb-2 my-2">
          Showing {tasks.length} out of {tasks.length} tasks.
        </p>

        <TheTasksTable filteredTasks={tasks} />
      </div>
    </div>
  );
};

export default TaskTable;
