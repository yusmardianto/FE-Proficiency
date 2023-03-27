<script setup>
import Img from '@/assets/schedule-offline.png'
</script>

<template>
    <section class="jumbotron grid grid-cols-1 md:grid-cols-2 gap-0">
        <div class="bg-[#024D94] h-screen">
            <div class="px-9 title">
                Let&#039;s Keep Your<br />Data Safe
            </div>
            <div class="px-9 py-6 description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et<br />purus
                a odio finibus bibendum in sit amet leo. Mauris feugiat erat<br />tellus.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam<br />et purus a
                odio finibus bibendum in sit amet leo. Mauris feugiat erat<br />tellus.
                Lorem ipsum dolor sit amet.
            </div>
            <div class="px-9 py-6">
                <button class="bg-[#F8D171] text-[#024D94] font-bold py-2 px-4 rounded">Know More</button>
            </div>
        </div>
        <div class="bg-[#F8D171]">
            <img :src="Img" alt="My image" />
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
            Img: Img,
        }
    },
}
</script>