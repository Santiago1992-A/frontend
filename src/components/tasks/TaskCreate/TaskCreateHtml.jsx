import React from "react";
import styles from "./TaskCreate.module.css";

const TaskCreateForm = ({
  title,
  description,
  dueDate,
  status,
  handleChange,
  handleSubmit,
  handleLogout,
}) => (
  <div className={styles["task-create-container"]}>
    <h2>Crear Nueva Tarea</h2>
    <button onClick={handleLogout}>Cerrar sesión</button>{" "}
    <form onSubmit={handleSubmit} className={styles["task-create-form"]}>
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
      <button type="submit">Crear</button>{" "}
    </form>
  </div>
);

export default TaskCreateForm;
