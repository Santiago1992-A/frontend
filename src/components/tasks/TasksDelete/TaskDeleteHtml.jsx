import React from "react";
import styles from "./TaskDelete.module.css";

const TaskDeleteForm = () => (
  <div className={styles["task-delete-container"]}>
    <h2 className={styles["task-delete-message"]}>Eliminando Tarea...</h2>
  </div>
);

export default TaskDeleteForm;
