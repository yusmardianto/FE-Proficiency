<template>
    <nav class="bg-transparent">
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
            isOpen: false,
        };
    },
};
</script>
  