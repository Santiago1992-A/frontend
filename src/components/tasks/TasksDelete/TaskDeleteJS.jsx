import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TaskDeleteForm from "./TaskDeleteHtml";

const TaskDeleteContainer = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL.
  const navigate = useNavigate(); // Declara useNavigate para redirigir al usuario.

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local.
    axios
      .delete(`http://localhost:3000/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Añade el token de autenticación en la cabecera de la solicitud.
        },
      })
      .then(() => navigate("/tasks"))
      .catch((error) => console.error("Error al eliminar la tarea:", error)); // Muestra un error en la consola si algo falla.
  }, [id, navigate]); // El efecto se ejecuta cuando cambian 'id' o 'navigate'.

  // Renderiza el componente de presentación.
  return <TaskDeleteForm />;
};

export default TaskDeleteContainer;
