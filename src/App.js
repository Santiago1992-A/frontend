import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/LoginJS";
import Register from "./components/register/RegisterJS";
import TaskList from "./components/tasks/TaskList/TaskListJS";
import TaskCreate from "./components/tasks/TaskCreate/TaskCreateJS";
import TaskUpdate from "./components/tasks/TaskUpdate/TaskUpdateJS";
import TaskDelete from "./components/tasks/TasksDelete/TaskDeleteJS";
import PrivateRoute from "./components/tasks/shared/PrivateRoute";
import TaskLayout from "./components/tasks/TaskLayout/TaskLayoutJS";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<TaskLayout />}>
            <Route
              path="/tasks"
              element={<PrivateRoute element={TaskList} />}
            />
            <Route
              path="/tasks/create"
              element={<PrivateRoute element={TaskCreate} />}
            />
            <Route
              path="/tasks/update/:id"
              element={<PrivateRoute element={TaskUpdate} />}
            />
            <Route
              path="/tasks/delete/:id"
              element={<PrivateRoute element={TaskDelete} />}
            />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
