<script setup>
import Navbar from '@/components/Form/Navbar.vue'
import LandingPage from '@/assets/LandingPage.png'
import Form from '@/assets/Form.png'
</script>

<template>
  <div id="app">
  <Navbar />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 justify-center">
    <div class="p-4">
      <div class="flex flex-col">
        <img :src="LandingPage" alt="My image" class="float-left block mx-auto" />
        <div class="py-10">
          <router-link to="/home">
            <button class="block mx-auto bg-[#F8D171] text-[#024D94] font-bold py-2 px-4 rounded">View Page</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="flex flex-col">
        <img :src="Form" alt="My image" class="float-left block mx-auto" />
        <div class="py-10">
          <button class="block mx-auto bg-[#F8D171] text-[#024D94] font-bold py-2 px-4 rounded">View Page</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      LandingPage: LandingPage,
      Form: Form,
    }
  },
}
</script>