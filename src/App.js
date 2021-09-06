import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { initialState } from "./store/initialStates";

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false);

  // Create a task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task };
    setTasks((prevState) => [...prevState, newTask]);
  };

  // Delete Task
  const onDelete = (deletedItemID) =>
    setTasks(tasks.filter((task) => task.id !== deletedItemID));

  // Toggle Done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Toggle Show and hide
  const toggleShow = () => setIsTaskBarShowed((prevState) => !prevState);

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        isTaskBarShowed={isTaskBarShowed}
        toggleShow={toggleShow}
      />
      {isTaskBarShowed && <CreateTask onCreate={onCreate} />}

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      ) : (
        <p>No Task to show</p>
      )}
    </div>
  );
}

export default App;
