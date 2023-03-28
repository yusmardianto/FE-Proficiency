<template>
    <div class="container mx-auto px-2 py-8">
        <form class="max-w-md mx-auto">
            <h1 class="block font-bold mb-2">Product Organization</h1><br>
            <div class="mb-2">
                <label class="block font-bold mb-2" for="category">Category:</label>
                <select v-model="selectedCategory" @change="onCategoryChange"
                    class=" bg-white appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category">
                    <option value="" disabled>Select a category</option>
                    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                    <option value="add-new">Add New Category</option>
                </select>
                <div v-if="selectedCategory === 'add-new'">
                    <button @click="showPopup = true"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Category
                    </button>
                </div>

                <div v-if="showPopup"
                    class="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-4 rounded shadow-lg">
                        <h2 class="font-bold mb-4">Add New Category</h2>
                        <label for="new-category" class="block font-bold">Category Name:</label>
                        <input id="new-category" type="text" v-model="newCategoryName"
                            class="border border-gray-400 rounded-md p-2 mb-4 w-full">
                        <div class="flex justify-end">
                            <button @click="showPopup = false"
                                class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">
                                Cancel
                            </button>
                            <button @click="addNewCategory"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <label class="block font-regular mb-2" for="Brand">Product Brand</label>
                <input v-model="Brand"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Brand" type="text" placeholder="e.g., T-Shirt">
            </div>
            <div class="mb-2">
                <label class="block font-regular mb-2" for="Collection">Collection</label>
                <input v-model="Collection"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Collection" type="text">
            </div>
            <div class="mb-2">
                <label class="block font-regular mb-2" for="Tags">Tags</label>
                <input v-model="Tags"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Tags" type="text" placeholder="Find or Create Tags">
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            name: '',
            message: '',
            categories: ['General', 'Technical', 'Sales'],
            selectedCategory: '',
            newCategoryName: '',
            showPopup: false,
        }
    },
    methods: {
        addNewCategory() {
            if (this.newCategoryName) {
                this.categories.push(this.newCategoryName);
                this.selectedCategory = this.newCategoryName;
                this.newCategoryName = '';
                this.showPopup = false;
            }
        },
    },
}
</script>
  