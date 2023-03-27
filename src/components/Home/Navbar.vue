<template>
    <nav :class="{'bg-transparent': !scrolled, 'bg-white': scrolled}" class="bg-transparent fixed w-full transition duration-300 ease-in-out z-50">
        <div class="container mx-auto">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <router-link to="/" class="font-bold text-[#F8D171] text-4xl">Protem</router-link>
                </div>
                <div class="flex items-center">
                    <router-link to="/" class="px-3 py-2 font-regular text-[#024D94] text-xl">Home</router-link>
                    <router-link to="/" class="px-3 py-2 font-regular text-[#024D94] text-xl">About</router-link>
                    <router-link to="/" class="px-3 py-2 font-regular text-[#024D94] text-xl">Features</router-link>
                    <router-link to="/" class="px-3 py-2 font-regular text-[#024D94] text-xl">Collection</router-link>
                    <router-link to="/" class="px-3 py-2 font-regular text-[#024D94] text-xl">Contact</router-link>
                    <button class="bg-[#024D94] text-white font-bold py-2 px-4 rounded">Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>
  