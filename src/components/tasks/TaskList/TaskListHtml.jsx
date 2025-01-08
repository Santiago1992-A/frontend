import React from "react";
import { Link } from "react-router-dom";
import styles from "./TaskList.module.css";

const TaskListForm = ({ tasks, formatDate }) => (
  <div className={styles["task-list-container"]}>
    <h2>Lista de Tareas</h2>
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={styles["task-item"]}>
          <div className={styles["task-details"]}>
            <div className={styles["task-title"]}>
              Título: <span>{task.title}</span>
            </div>
            <div className={styles["task-description"]}>
              Descripción: <span>{task.description}</span>
            </div>
            <div className={styles["task-dueDate"]}>
              Fecha: <span>{formatDate(task.dueDate)}</span>
            </div>
            <div className={styles["task-status"]}>
              Estado: <span>{task.status}</span>
            </div>
          </div>

          <div className={styles["task-actions"]}>
            <Link className={styles["editar"]} to={`/tasks/update/${task.id}`}>
              Editar
            </Link>
            <Link
              className={styles["eliminar"]}
              to={`/tasks/delete/${task.id}`}
            >
              Eliminar
            </Link>
          </div>
        </li>
      ))}
    </ul>
    <Link to="/tasks/create" className={styles["create-task-link"]}>
      Crear Nueva Tarea
    </Link>
  </div>
);

export default TaskListForm;
