<script setup>
import Image1 from '@/assets/line2.png'
import Image2 from '@/assets/1.png'
import Image3 from '@/assets/2.png'
import Image4 from '@/assets/3.png'
import Image5 from '@/assets/4.png'
</script>

<template>
    <section class="bg-gray-100 p-10 h-screen">
        <h1 class="future text-4xl font-bold mb-4">
            <div class="future-title">Future of The Protem</div>
        </h1>
        <img :src="Image1" alt="My image" class="w-1/6 block mx-auto" />
        <p class="py-5 future-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
            finibus
            bibendum in sit<br>amet leo. Mauris feugiat erat tellus.</p>
        <div class="container mx-auto text-left p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-100 p-4">
                    <img :src="Image2" alt="My image" class="float-left w-1/6 block mx-auto" />
                    <p class="future-title-1 text-left">Data Stored</p>
                    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                        odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
                <div class="bg-gray-100 p-4">
                    <img :src="Image3" alt="My image" class="float-left w-1/6 block mx-auto" />
                    <p class="text-left">Fingerprint lock</p>
                    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                        odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
                <div class="bg-gray-100 p-4">
                    <img :src="Image4" alt="My image" class="float-left w-1/6 block mx-auto" />
                    <p class="text-left">Innovative Idea</p>
                    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                        odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
                <div class="bg-gray-100 p-4">
                    <img :src="Image5" alt="My image" class="float-left w-1/6 block mx-auto" />
                    <p class="text-left">Password Protect</p>
                    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                        odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import '@/components/Home/Home.css';
</style>

<script>
export default {
    data() {
        return {
            Image1: Image1,
            Image2: Image2,
            Image3: Image3,
            Image4: Image4,
            Image5: Image5,
        }
    },
}
</script>
  