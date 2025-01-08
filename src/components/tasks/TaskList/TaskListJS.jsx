import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskListForm from "./TaskListHtml";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]); // Declara el estado para almacenar las tareas.

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local.
    axios
      .get("http://localhost:3000/tasks", {
        headers: {
          Authorization: `Bearer ${token}`, // Añade el token de autenticación en la cabecera de la solicitud.
        },
      })
      .then((response) => setTasks(response.data)) // Actualiza el estado con las tareas obtenidas.
      .catch((error) => console.error("Error al obtener las tareas:", error));
  }, []); // El arreglo vacío [] asegura que este efecto se ejecute solo una vez después de que el componente se monte.

  // Función para formatear la fecha en un formato legible.
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Renderiza el componente de presentación y pasa las props necesarias.
  return <TaskListForm tasks={tasks} formatDate={formatDate} />;
};

export default TaskListContainer;
