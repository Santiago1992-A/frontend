import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
const RegisterForm = ({ email, password, handleChange, handleSubmit }) => (
  <div className={styles["register-container"]}>
    <h2>Registro</h2>
    <form onSubmit={handleSubmit} className={styles["register-form"]}>
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
          onChange={(e) => handleChange(e, "password")} // Actualiza el estado de la contraseña cuando cambia el valor del input.
        />
      </div>
      <button type="submit">Registrarse</button>{" "}
    </form>
    <p className={styles["register-link"]}>
      ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
    </p>
  </div>
);

export default RegisterForm;
