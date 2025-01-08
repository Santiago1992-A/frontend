import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TaskLayoutForm from "./TaskLayoutHtml";

const TaskLayoutContainer = () => {
  const navigate = useNavigate(); // Declara useNavigate para redirigir al usuario.

  // Función para manejar el cierre de sesión.
  const handleLogout = async () => {
    try {
      // Enviamos una solicitud POST al servidor para cerrar la sesión.
      await axios.post("http://localhost:3000/auth/logout");

      localStorage.removeItem("token"); // Elimina el token de autenticación del almacenamiento local.
      alert("La sesión se cerró exitosamente"); // Muestra un mensaje de cierre de sesión exitoso.

      navigate("/login"); // Redirige al usuario a la página de inicio de sesión.
    } catch (error) {
      // En caso de error, mostramos un mensaje de error al usuario.
      console.error("Error durante el cierre de sesión:", error);
      alert("No se pudo cerrar la sesión, intenta nuevamente.");
    }
  };

  // Renderizamos el diseño general del apartado de tareas.
  return <TaskLayoutForm handleLogout={handleLogout} />;
};

export default TaskLayoutContainer;
