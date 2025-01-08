import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginHtml";

const LoginContainer = () => {
  const [email, setEmail] = useState(""); // Declara el estado para almacenar el email.
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Declara useNavigate para redirigir al usuario después de iniciar sesión.

  // Función que maneja el cambio de valores en los inputs.
  const handleChange = (event, field) => {
    if (field === "email") {
      setEmail(event.target.value);
    } else if (field === "password") {
      setPassword(event.target.value);
    }
  };

  // Función que maneja el envío del formulario.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene que el formulario se envíe de forma tradicional.
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      }); // Envía los datos del formulario al backend para autenticar al usuario.

      console.log("Inicio de sesión exitoso:", response.data); // Muestra un mensaje de éxito en la consola.

      localStorage.setItem("token", response.data.accessToken); // Guarda el token de autenticación en el almacenamiento local.
      navigate("/tasks");
    } catch (error) {
      console.error("Error al iniciar sesión:", error); // Muestra un error en la consola si algo falla.
    }
  };

  // Renderiza el componente de presentación y pasa las props necesarias.
  return (
    <LoginForm
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
