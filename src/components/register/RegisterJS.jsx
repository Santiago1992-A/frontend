import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterHtml";

const RegisterContainer = () => {
  const [email, setEmail] = useState(""); // Declara el estado para almacenar el email.
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
      }); // Envía los datos del formulario al backend para registrar al usuario.

      console.log("Registro exitoso:", response.data);
      window.alert("Usuario creado exitosamente");

      navigate("/login");
    } catch (error) {
      console.error("Error al registrarse:", error); // Muestra un error en la consola si algo falla.
    }
  };

  // Renderiza el componente de presentación y pasa las props necesarias.
  return (
    <RegisterForm
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
