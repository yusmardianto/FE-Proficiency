<script setup>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Product from './components/Product.vue'
</script>

<template>
  <div class="bg-slate-100">
    <Navbar />
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded-md">
          <Content />
        </div>
        <div class="bg-white shadow-md rounded-md">
          <Product />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
