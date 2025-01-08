import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./TaskLayout.module.css";

const TaskLayoutForm = ({ handleLogout }) => (
  <div className={styles["task-layout-container"]}>
    <button className={styles["logout-button"]} onClick={handleLogout}>
      Cerrar sesión
    </button>

    {/* Outlet se utiliza para renderizar las rutas hijas dentro de este diseño. */}
    <Outlet />
  </div>
);

export default TaskLayoutForm;
