let tasks = [
  { task: "Do sport", marked: false },
  { task: "Go to cinema", marked: true },
];

const addTask = (task, marked) => {
  if (typeof task !== "string" || typeof marked !== "boolean") {
    throw new Error("Invalid inputs for new task!");
  }

  tasks.push({ task, marked });
  return tasks;
};

const indexValidation = (index) => {
  if (typeof index !== "number") {
    throw new Error("Invalid index");
  }
};

const deleteTask = (index) => {
  indexValidation(index);

  tasks = tasks.filter((task, _, arry) => {
    if (!arry[index]) {
      throw new Error(`no item on index ${index}`);
    }

    return task !== arry[index];
  });

  return tasks;
};

const markTaskAsDone = (index) => {
  indexValidation(index);

  tasks.forEach((_, __, arry) => {
    if (!arry[index]?.marked) arry[index].marked = true;
  });

  return tasks;
};

module.exports = { addTask, deleteTask, markTaskAsDone, tasks };
