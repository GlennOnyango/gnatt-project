export const currentDate = new Date(Date.now());
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// export const tasks = [];

// export const dependencies = [];

// export const resources = [];

// export const resourceAssignments = [];

export const tasks = [
  {
    id: 1,
    parentId: 0,
    title: "Analysis/Software Requirements",
    start: new Date(year, month, 1),
    end: new Date(year, month, 28),
    progress: 31,
    tickets: [1, 2],
  },
  {
    id: 2,
    parentId: 1,
    title: "Conduct needs analysis",
    start: new Date(year, month, 1),
    end: new Date(year, month, 3),
    progress: 15,
    tickets: [3],
  },
  {
    id: 3,
    parentId: 1,
    title: "Draft preliminary software specifications",
    start: new Date(year, month, 3),
    end: new Date(year, month, 5),
    progress: 30,
    tickets: [4],
  },
  {
    id: 4,
    parentId: 1,
    title: "Review software specifications/budget with team",
    start: new Date(year, month, 4),
    end: new Date(year, month, 6),
    progress: 60,
    tickets: [5],
  },
  {
    id: 5,
    parentId: 1,
    title: "Incorporate feedback on software specifications",
    start: new Date(year, month, 6),
    end: new Date(year, month, 8),
    progress: 45,
    tickets: [6],
  },
  {
    id: 6,
    parentId: 1,
    title: "Develop delivery timeline",
    start: new Date(year, month, 8),
    end: new Date(year, month, 14),
    progress: 15,
    tickets: [7],
  },
  {
    id: 7,
    parentId: 1,
    title: "Obtain approvals to proceed (concept, timeline, budget)",
    start: new Date(year, month, 14),
    end: new Date(year, month, 20),
    progress: 15,
    tickets: [8],
  },
  {
    id: 8,
    parentId: 1,
    title: "Draft preliminary software specifications",
    start: new Date(year, month, 20),
    end: new Date(year, month, 25),
    progress: 0,
    tickets: [9],
  },
  {
    id: 9,
    parentId: 1,
    title: "Secure required resources",
    start: new Date(year, month, 25),
    end: new Date(year, month, 28),
    progress: 0,
    tickets: [10],
  },
];
export const dependencies = [
  {
    id: 1,
    predecessorId: 2,
    successorId: 3,
    type: 0,
  },
  {
    id: 2,
    predecessorId: 3,
    successorId: 4,
    type: 0,
  },
  {
    id: 3,
    predecessorId: 4,
    successorId: 5,
    type: 0,
  },
  {
    id: 4,
    predecessorId: 5,
    successorId: 6,
    type: 0,
  },
  {
    id: 5,
    predecessorId: 6,
    successorId: 7,
    type: 0,
  },
  {
    id: 6,
    predecessorId: 7,
    successorId: 8,
    type: 0,
  },
  {
    id: 7,
    predecessorId: 8,
    successorId: 9,
    type: 0,
  },
];

export const resources = [
  {
    id: 1,
    text: "John Heart",
  },
  {
    id: 2,
    text: "Paul Peyton",
  },
  {
    id: 3,
    text: "Robert Reagan",
  },
  {
    id: 4,
    text: "Greta Sims",
  },
  {
    id: 5,
    text: "Brett Wade",
  },
  {
    id: 6,
    text: "Sandra Johnson",
  },
  {
    id: 7,
    text: "Kevin Carter",
  },
  {
    id: 8,
    text: "Cynthia Stanwick",
  },
  {
    id: 9,
    text: "Olivia Samuelson",
  },
];

export const resourceAssignments = [
  {
    id: 0,
    taskId: 1,
    resourceId: 1,
  },
  {
    id: 1,
    taskId: 2,
    resourceId: 2,
  },
  {
    id: 2,
    taskId: 3,
    resourceId: 3,
  },
  {
    id: 3,
    taskId: 4,
    resourceId: 4,
  },
  {
    id: 4,
    taskId: 5,
    resourceId: 5,
  },
  {
    id: 5,
    taskId: 6,
    resourceId: 6,
  },
  {
    id: 6,
    taskId: 7,
    resourceId: 7,
  },
  {
    id: 7,
    taskId: 8,
    resourceId: 8,
  },
  {
    id: 8,
    taskId: 9,
    resourceId: 9,
  },
  {
    id: 9,
    taskId: 2,
    resourceId: 3,
  },
];

export const tickets = [
  {
    id: 1,
    title: "Bob the builder",
    creator: "Glenn",
    description: "This is a demo ticket",
  },
  {
    id: 2,
    title: "Fix login issue",
    creator: "Alice",
    description: "Users are unable to log in due to a server error.",
  },
  {
    id: 3,
    title: "Update homepage design",
    creator: "John",
    description: "Redesign the homepage to improve user experience.",
  },
  {
    id: 4,
    title: "Add dark mode",
    creator: "Emma",
    description: "Implement dark mode for the application.",
  },
  {
    id: 5,
    title: "Optimize database queries",
    creator: "Michael",
    description: "Improve the performance of database queries.",
  },
  {
    id: 6,
    title: "Write unit tests",
    creator: "Sophia",
    description: "Add unit tests for the new features.",
  },
  {
    id: 7,
    title: "Fix mobile responsiveness",
    creator: "Liam",
    description:
      "Ensure the application is fully responsive on mobile devices.",
  },
  {
    id: 8,
    title: "Implement notifications",
    creator: "Olivia",
    description: "Add a notification system for user updates.",
  },
  {
    id: 9,
    title: "Improve accessibility",
    creator: "Noah",
    description: "Ensure the application meets accessibility standards.",
  },
  {
    id: 10,
    title: "Add user profile page",
    creator: "Ava",
    description: "Create a user profile page with editable information.",
  },
];
