<script>
import { signInWithEmailAndPassword, auth } from "@/Auth";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginIn() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        this.$router.push("/");
      } catch (error) {
        console.error("error al iniciar sesion", error);
        Swal.fire({
          title: "Error!",
          text: "Al iniciar sesion",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    },
  },
};
</script>

<template>
  <div class="login-container">
    <h2 class="login-title">Iniciar sesión</h2>
    <input
      v-model="email"
      type="email"
      class="login-input"
      placeholder="Correo electrónico"
    />
    <input
      v-model="password"
      type="password"
      class="login-input"
      placeholder="Contraseña"
    />
    <button @click="loginIn" class="login-button">Iniciar</button>
    <router-link to="/registro" class="register-link">
      Registrate aqui
    </router-link>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Título */
.login-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* Campos de entrada */
.login-input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.login-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

/* Botón */
.login-button {
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

/* Enlace de registro */
.register-link {
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #0056b3;
}
</style>
