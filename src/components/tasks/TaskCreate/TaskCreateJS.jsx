import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TaskCreateForm from "./TaskCreateHtml";

const TaskCreateContainer = () => {
  // Declara los estados para el título, descripción, fecha de vencimiento y estado de la tarea.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate(); // Declara useNavigate para redirigir al usuario después de crear una tarea.

  // Función que maneja el cambio de valores en los inputs.
  const handleChange = (event, field) => {
    if (field === "title") {
      setTitle(event.target.value);
    } else if (field === "description") {
      setDescription(event.target.value);
    } else if (field === "dueDate") {
      setDueDate(event.target.value);
    } else if (field === "status") {
      setStatus(event.target.value);
    }
  };

  // Función que maneja el envío del formulario.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene que el formulario se envíe de forma tradicional.
    try {
      const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local.
      await axios.post(
        "http://localhost:3000/tasks",
        { title, description, dueDate, status }, // Envía los datos de la tarea al backend.
        {
          headers: {
            Authorization: `Bearer ${token}`, // Añade el token de autenticación en la cabecera de la solicitud.
          },
        }
      );
      navigate("/tasks"); // Redirige a la lista de tareas después de crear la tarea.
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  // Función que maneja el cierre de sesión.
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/auth/logout"); // Realiza una solicitud POST para cerrar sesión.
      localStorage.removeItem("token"); // Elimina el token de autenticación del almacenamiento local.
      alert("Cierre de sesión exitoso"); // Muestra un mensaje de cierre de sesión exitoso.
      navigate("/login");
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error); // Muestra un error en la consola si algo falla durante el cierre de sesión.
      alert("Logout failed"); // Muestra un mensaje de error si el cierre de sesión falla.
    }
  };

  return (
    <TaskCreateForm
      title={title}
      description={description}
      dueDate={dueDate}
      status={status}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleLogout={handleLogout}
    />
  );
};

export default TaskCreateContainer;
