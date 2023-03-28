<template>
    <div class="p-4">
        <h1 class="block font-bold mb-2">Inventory</h1><br>
        <div class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" v-model="checkboxQuantity">
            <label for="checkboxQuantity" class="ml-2 text-gray-700">Track Quantity</label>
        </div>
        <div v-if="checkboxQuantity" class="mt-4">
            <div class="flex items-center">
                <label class="block text-gray-700 font-bold mb-2" for="number-input">Quantity</label>
                <input
                    class="mx-auto appearance-none border-2 border-gray-200 rounded py-2 leading-tight text-right focus:outline-none focus:border-blue-500"
                    id="number-input" type="number" v-model="number" min="1" max="100" step="1">
            </div>
            <div class="flex items-center">
                <label class="block text-gray-700 font-bold mb-2" for="number-input">Low Quantity Warning</label>
                <input
                    class="mx-auto appearance-none border-2 border-gray-200 rounded py-2 leading-tight text-right focus:outline-none focus:border-blue-500"
                    id="number-input" type="number" v-model="number" min="1" max="100" step="1">
            </div>
        </div><br><br>
        <div class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" v-model="checkboxSKU">
            <label for="checkboxSKU" class="ml-2 text-gray-700">This Product Has a SKU or Barcode</label>
        </div>
        <div v-if="checkboxSKU" class="mt-4 flex">
            <div class="w-1/2 pr-2">
                <label class="block text-gray-700 font-bold mb-2" for="text-input-1">SKU ( Stock Keeping Unit )</label>
                <input
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    id="text-input-1" type="text" v-model="text1">
            </div>
            <div class="w-1/2 pl-2">
                <label class="block text-gray-700 font-bold mb-2" for="text-input-2">Barcode (ISBN, UPC, GTIN, etc,)</label>
                <input
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    id="text-input-2" type="text" v-model="text2">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            checkboxQuantity: false,
            checkboxSKU: false,
            number: 1,
            text1: '',
            text2: ''
        }
    }
}
</script>
  