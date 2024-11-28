<script setup>

</script>

<template>
  <main class="welcome-container">
    <h1 class="welcome-title">Bienvenido</h1>
    <p class="welcome-message">Has iniciado sesión correctamente</p>
  </main>
  
</template>
<style>
/* Contenedor principal */
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
}

/* Título */
.welcome-title {
  font-size: 28px;
  font-weight: bold;
  color:green;
  margin-bottom: 15px;
}

/* Mensaje */
.welcome-message {
  font-size: 18px;
  color: #555;
  margin: 0;
}

</style>