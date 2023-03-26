<template>
    <div class="container mx-auto px-4 py-8">
        <form class="max-w-md mx-auto">
            <div class="mb-4">
                <label class="block font-regular mb-2" for="name">Title</label>
                <input v-model="name"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
                <label class="block font-regular mb-2" for="message">Description</label>
                <textarea v-model="message"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            name: '',
            message: ''
        }
    }
}
</script>
  