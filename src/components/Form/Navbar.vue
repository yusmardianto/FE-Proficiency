<template>
    <nav class="bg-black shadow-lg">
        <div class="container mx-auto">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <router-link to="/" class="font-bold text-white">Unsaved Product</router-link>
                </div>
                <div class="flex items-center">
                    <button class="bg-white text-black font-bold py-2 px-4 rounded mr-4">Discard</button>
                    <button class="bg-white text-black font-bold py-2 px-4 rounded">Save</button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, toggle classes based on menu state -->
        <div class="md:hidden transition-all duration-300 ease-in-out" :class="{ 'block': isOpen, 'hidden': !isOpen }">
            <div class="px-2 pt-2 pb-3 sm:px-3">
                <router-link to="/"
                    class="block px-3 py-2 text-base font-medium text-gray-800 rounded-md hover:text-gray-600">
                    <button class="bg-white text-black font-bold py-2 px-4 rounded-full mr-4">Discard</button>
                </router-link>
                <router-link to="/about"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-800 rounded-md hover:text-gray-600">
                    <button class="bg-white text-black font-bold py-2 px-4 rounded-full mr-4">Save</button>
                </router-link>
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
  