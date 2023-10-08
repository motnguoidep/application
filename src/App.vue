
<template>
 <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
            Home 
        </router-link>
        <!-- <div class="danhmuc items-center gap-1">
            <router-link to="/" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Search Meals
            </router-link>
            <router-link to="/" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By letter
            </router-link>
            <router-link to="/" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By ingredients
            </router-link>
        </div> -->
        <div class="danhmuc items-center gap-1">
            <router-link :to="{name: 'byName'}" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Search Meals
            </router-link>
            <router-link :to="{name: 'byLetter'}" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By letter
            </router-link>
            <router-link :to="{name: 'byIngredient'}" class="danhmuc1 inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By ingredients
            </router-link>
        </div>
    </header>
    <main>
        <router-view/>
    </main>
 </div>
</template>

<script setup>
// import main from "./assets/main.css"

</script>


<style scoped>
.bg-gray-100 {
  background-color: #f7fafc;
}

.bg-white {
  background-color: #ffffff;
}

.shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.h-16 {
  height: 4rem; /* Adjusted height to 16px */
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}
.danhmuc{
    align-items: center;
    margin-right: 1rem;
}
.danhmuc1{
    padding: 0 2rem 0 2rem;
    height: 100%;
    display: inline-flex;
    align-items: center;
}
.danhmuc1:hover {  
    background-color: #9F7AEA; /* Adjust color to your preference */
    
}


</style> 

