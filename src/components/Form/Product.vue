<template>
    <div class="container mx-auto px-2 py-8">
        <form class="max-w-md mx-auto">
            <h1 class="block font-bold mb-2">Product Organization</h1><br>
            <div class="mb-2">
                <label class="block font-bold mb-2" for="category">Category:</label>
                <select v-model="selectedCategory" @change="onCategoryChange" class=" bg-white appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
                    <option value="" disabled>Select a category</option>
                    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                </select>
            </div>
            <div v-if="showPopup">
                <form @submit.prevent="addCategory">
                    <label for="new-category">New category name:</label>
                    <input type="text" id="new-category" v-model="newCategoryName">
                    <button type="submit">Add category</button>
                    <button type="button" @click="closePopup">Cancel</button>
                </form>
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
            showPopup: false,
            newCategoryName: ''
        }
    },
    methods: {
    onCategoryChange() {
      if (!this.categories.includes(this.selectedCategory)) {
        this.showPopup = true
      }
    },
    
    addCategory() {
      this.categories.push(this.newCategoryName)
      this.selectedCategory = this.newCategoryName
      this.newCategoryName = ''
      this.showPopup = false
    },
    
    closePopup() {
      this.showPopup = false
      this.newCategoryName = ''
    }
  }
}
</script>
  