<script setup>
import Navbar from '@/components/Form/Navbar.vue'
import Content from '@/components/Form/Content.vue'
import Product from '@/components/Form/Product.vue'
import Inventory from '@/components/Form/Inventory.vue'
</script>

<template>
  <div class="bg-slate-100">
    <Navbar />
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded-md">
          <Content />
        </div>
        <div class="bg-white shadow-md rounded-md">
          <Product />
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded-md">
          <Inventory />
        </div>
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<style scoped></style>
