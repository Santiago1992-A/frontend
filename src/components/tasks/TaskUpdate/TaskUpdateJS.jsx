import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TaskUpdateForm from "./TaskUpdateHtml";

const TaskUpdateContainer = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL.
  const [title, setTitle] = useState(""); // Declara el estado para almacenar el título de la tarea.
  const [description, setDescription] = useState(""); // Declara el estado para almacenar la descripción de la tarea.
  const [dueDate, setDueDate] = useState(""); // Declara el estado para almacenar la fecha de vencimiento de la tarea.
  const [status, setStatus] = useState(""); // Declara el estado para almacenar el estado de la tarea.
  const navigate = useNavigate(); // Declara useNavigate para redirigir al usuario.

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local.
    axios
      .get(`http://localhost:3000/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Añade el token de autenticación en la cabecera de la solicitud.
        },
      })
      .then((response) => {
        setTitle(response.data.title); // Actualiza el estado con el título de la tarea.
        setDescription(response.data.description); // Actualiza el estado con la descripción de la tarea.
        setDueDate(response.data.dueDate); // Actualiza el estado con la fecha de vencimiento de la tarea.
        setStatus(response.data.status); // Actualiza el estado con el estado de la tarea.
      })
      .catch((error) => console.error("Error al obtener la tarea:", error)); // Muestra un error en la consola si algo falla.
  }, [id]); // El efecto se ejecuta cuando cambia 'id'.

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
      await axios.put(
        `http://localhost:3000/tasks/${id}`,
        { title, description, dueDate, status }, // Envía los datos de la tarea actualizados al backend.
        {
          headers: {
            Authorization: `Bearer ${token}`, // Añade el token de autenticación en la cabecera de la solicitud.
          },
        }
      );
      navigate("/tasks"); // Redirige a la lista de tareas después de actualizar la tarea.
    } catch (error) {
      console.error("Error al actualizar la tarea:", error); // Muestra un error en la consola si algo falla.
    }
  };

  // Renderiza el componente de presentación y pasa las props necesarias.
  return (
    <TaskUpdateForm
      title={title}
      description={description}
      dueDate={dueDate}
      status={status}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default TaskUpdateContainer;
