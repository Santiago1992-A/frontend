import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const LoginForm = ({ email, password, handleChange, handleSubmit }) => (
  <div className={styles["login-container"]}>
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, "email")} // Actualiza el estado del email cuando cambia el valor del input.
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => handleChange(e, "password")}
        />
      </div>
      <button type="submit">Iniciar Sesión</button>{" "}
    </form>
    <p className={styles["login-link"]}>
      ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
    </p>
  </div>
);

export default LoginForm; // Exporta el componente para ser utilizado en otras partes de la aplicación.
