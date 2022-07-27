<script setup lang="ts">
import { RouterView } from "vue-router";
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/footerComponent.vue";
</script>

<template>
  <headerComponent />
  <RouterView />
  <footerComponent />
</template>
