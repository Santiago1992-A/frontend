import React from "react";
import { Navigate } from "react-router-dom";

// Define el componente PrivateRoute que toma las propiedades element y rest
const PrivateRoute = ({ element: Component, ...rest }) => {
  // Verifica si el usuario está autenticado comprobando si hay un token en el almacenamiento local
  const isAuthenticated = !!localStorage.getItem("token"); // Ajusta esta verificación según tu lógica de autenticación

  // Si el usuario está autenticado, renderiza el componente solicitado con sus props
  // Si no, redirige al usuario a la página de inicio de sesión
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default PrivateRoute;
