interface Task {
  id: number;
  title: string;
  priority: string;
  dueDate: string;
  assignedTo: string;
  status: string;
}

// interface TaskTableProps {
//   tasks: Task[];
// }

export const tasks: Task[] = [
  {
    id: 1,
    title: "Shopping",
    priority: "High",
    dueDate: "2024-09-16",
    assignedTo: "John Doe",
    status: "Progress",
  },
  {
    id: 2,
    title: "Learn Driving",
    priority: "Low",
    dueDate: "2024-09-20",
    assignedTo: "",
    status: "Pending",
  },
  {
    id: 3,
    title: "Environmental",
    priority: "medium",
    dueDate: "",
    assignedTo: "Jane Doe",
    status: "Deferred",
  },
  {
    id: 4,
    title: "Unboxing",
    priority: "medium",
    dueDate: "2024-09-20",
    assignedTo: "Prince",
    status: "Deferred",
  },
  {
    id: 5,
    title: "Washing",
    priority: "medium",
    dueDate: "2024-09-20",
    assignedTo: "",
    status: "Cancelled",
  },
];
