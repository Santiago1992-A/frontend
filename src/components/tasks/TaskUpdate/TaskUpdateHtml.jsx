// TaskUpdateForm.jsx
import React from "react";
import styles from "./TaskUpdate.module.css";

const TaskUpdateForm = ({
  title,
  description,
  dueDate,
  status,
  handleChange,
  handleSubmit,
}) => (
  <div className={styles["task-update-container"]}>
    <h2>Actualizar Tarea</h2>
    <form onSubmit={handleSubmit} className={styles["task-update-form"]}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleChange(e, "title")} // Actualiza el estado del título cuando cambia el valor del input.
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e, "description")} // Actualiza el estado de la descripción cuando cambia el valor del input.
        />
      </div>
      <div>
        <label>Fecha de Vencimiento:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => handleChange(e, "dueDate")} // Actualiza el estado de la fecha de vencimiento cuando cambia el valor del input.
        />
      </div>
      <div>
        <label>Estado:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => handleChange(e, "status")} // Actualiza el estado del estado cuando cambia el valor del input.
        />
      </div>
      <button type="submit">Actualizar</button>{" "}
    </form>
  </div>
);

export default TaskUpdateForm;
