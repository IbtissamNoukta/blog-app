<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-success bg-opacity-75">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" aria-current="page" to="/">
            <i class="bi bi-house"></i>
            Home
        </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>