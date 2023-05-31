<template>
    <div class="flex justify-center gap-9 mt-2 mb-9">
<NuxtLink to="/" exact>
    <h2 class="active:font-bold ">{{link1}}</h2>
</NuxtLink>
<NuxtLink :to= "`/${link2?.toLowerCase()}`" exact>
    <h2 class="active:font-bold">{{link2}}</h2>
</NuxtLink>
<NuxtLink :to= "`/${link3?.toLowerCase()}`" exact>
    <h2 class="active:font-bold">{{link3}}</h2>
</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    link1: String,
    link2: String,
    link3: String,
})
</script>

<style scoped>
.router-link-active {
    @apply text-lg underline;
  }
  .router-link-active:hover {
    @apply font-extrabold;
  }
</style>