import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  priority: string;
  dueDate: string;
  assignedTo: string;
  status: string;
}

interface TaskTableProps {
  filteredTasks: Task[];
}
const TheTasksTable: React.FC<TaskTableProps> = ({ filteredTasks }) => {
  const location = useLocation();

  return (
    <table className="w-full table-auto border-collapse border border-gray-3">
      <thead className="bg-gray-100">
        <tr className="text-xs sm:text-base">
          <th className="px-4 py-2 border border-gray-300">ID</th>
          <th className="px-4 py-2 border border-gray-300">Title</th>
          <th className="px-4 py-2 border border-gray-300">Priority</th>
          <th className="px-4 py-2 border border-gray-300">Due Date</th>
          <th className="px-4 py-2 border border-gray-300">Assigned To</th>
          <th className="px-4 py-2 border border-gray-300">Status</th>
          <th
            className={`px-4 py-2 borde border-gray-3 ${
              location.pathname === "/" ? "hidden" : ""
            }`}
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks.map((task) => (
          <tr
            key={task.id}
            className="even:bg-gray-50 p-4 text-sm capitalize text-center"
          >
            <td className="px-4 py-2 border-b border-gray-3">{task.id}</td>
            <td className="px-4 py-2 border-b border-gray-3 font-semibold">
              {task.title}
            </td>
            <td className="px-4 py-2 border-b border-gray-3">
              {task.priority}
            </td>
            <td className="px-4 py-2 border-b border-gray-3">
              {task.dueDate ? (
                task.dueDate
              ) : (
                <p className="flex items-center justify-center gap-1">
                  <AiOutlineQuestionCircle
                    size={18}
                    className="text-blue-500"
                  />
                  Not Set
                </p>
              )}
            </td>
            <td className="px-4 py-2 border-b border-gray-3">
              {task.assignedTo ? (
                task.assignedTo
              ) : (
                <p className="flex items-center justify-center gap-1">
                  <AiOutlineQuestionCircle
                    size={18}
                    className="text-blue-500"
                  />
                  Not yet
                </p>
              )}
            </td>
            <td className="px-4 py-2 border-b border-gray-3 text-center">
              <span
                className={`text-sm p-1 rounded-md font-semibold ${
                  task.status === "Done"
                    ? "bg-green-400 text-white"
                    : task.status === "Progress"
                    ? "bg-yellow-400 text-white"
                    : task.status === "Pending"
                    ? "bg-red-400 text-white"
                    : "text-neutral-600"
                }`}
              >
                {task.status}
              </span>
            </td>
            <td
              className={`px-4 py-4 flex justify-center space-x-2 border-b ${
                location.pathname === "/" ? "hidden" : ""
              }`}
            >
              <FaEdit className="cursor-pointer text-blue-500" />
              <FaEye className="cursor-pointer text-green-500" />
              <FaTrash className="cursor-pointer text-red-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TheTasksTable;
