<template>
  <div class="container">
    <div class="row"> Connected: {{ state.connected }} </div>
    <div class="row"> {{ message }} </div>
  </div>
  </template>
  
  <script setup>
  import { state } from "@/io/client"
  
  const message = computed(() => {
    return state.message;
  })

  </script>