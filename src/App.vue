<script setup>
import Navbar from './components/Home/Navbar.vue'
</script>

<template>
  <div class="bg-cover bg-center bg-[url('/img/Bg.png')]">
    <Navbar />

    <div class="px-9 py-6 title">
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
  <div class="grid grid-cols-2 gap-0">
    <div class="h-screen">
      <div class="px-9 py-6 title2">About The Protem</div>
      <div class="px-9 py-6 description2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et<br />purus
        a odio finibus bibendum in sit amet leo. Mauris feugiat erat<br />tellus.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam<br />et purus a
        odio finibus bibendum in sit amet leo. Mauris feugiat erat<br />tellus.
        Lorem ipsum dolor sit amet.
      </div>
      <div class="px-9 py-6 group-1">
        <div class="rectangle-10"></div>
        <svg class="vector" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.29508 14.556L5.29508 14.556C5.40195 14.6993 5.5239 14.75 5.62499 14.75C5.72609 14.75 5.84804 14.6993 5.95492 14.556L5.29508 14.556ZM5.29508 14.556L0.420073 8.01857C0.311212 7.87259 0.25 7.67016 0.25 7.45686C0.25 7.24356 0.31121 7.04112 0.420075 6.89512C0.420076 6.89511 0.420078 6.89511 0.42008 6.89511L1.48071 5.47276L1.48072 5.47276C1.58758 5.32944 1.70953 5.27872 1.81063 5.27872C1.91172 5.27872 2.03368 5.32944 2.14054 5.47276L2.14055 5.47277L5.42459 9.87662L5.625 10.1454L5.82541 9.87662L12.8594 0.444015C12.9663 0.300716 13.0883 0.25 13.1894 0.25C13.2905 0.25 13.4124 0.300716 13.5193 0.444015L14.5799 1.86636L14.7774 1.71909L14.5799 1.86637C14.6888 2.01235 14.75 2.21478 14.75 2.42808C14.75 2.64137 14.6888 2.84381 14.5799 2.98982C14.5799 2.98982 14.5799 2.98983 14.5799 2.98983L5.95493 14.556L5.29508 14.556Z"
            fill="#024D94" stroke="black" stroke-width="0.5" />
        </svg>
      </div>
    </div>
    <div class="h-screen"></div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  .bg-cover {
    background-size: cover;
  }
}

@media (min-width: 768px) {
  .bg-center {
    background-position: center;
  }
}

.title {
  color: var(--white, #ffffff);
  text-align: left;
  font: 500 72px/78px "Nunito Sans", sans-serif;
  position: relative;
  width: 600px;
}

.description {
  color: var(--white, #ffffff);
  text-align: left;
  font: 300 16px/30px "Open Sans", sans-serif;
  width: 585px;
}

.title2 {
  color: var(--primary, #024d94);
  text-align: left;
  font: 900 60px/78px "Nunito Sans", sans-serif;
  position: relative;
  width: 645px;
}

.description2 {
  color: var(--black, #000000);
  text-align: left;
  font: 300 16px/30px "Open Sans", sans-serif;
  width: 585px;
}
</style>