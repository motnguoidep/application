<template>
  <div class=" flex flex-col p-8">
      <input
        type="text"
        class="search custom-input rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
      />

    <div class="abc flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
 
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([])

onMounted(async() => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
  ingredients.value = response.data
})
</script>

<style>
.search{
  @apply rounded border-2 border-gray-200 w-full;
  height: 40px;
  border-radius: 0.375rem; /* 6px */
  border-width: 0.125rem; /* 2px */
  border-style: solid;
  border-color: #edf2f7;
  width: 100%;
}


.abc{
  text-decoration: none;
  gap: 0.5rem; /* 8px */
  margin-top: 0.5rem; /* 8px */
  justify-content: center;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.p-8 {
  padding: 2rem;
}




</style>
