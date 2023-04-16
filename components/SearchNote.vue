<template>
    <div class="flex justify-center mt-2">
        <input v-model.trim="search" type="search" placeholder="Search..."
        class="w-[30%] border-2 rounded border-slate-300 focus:border-indigo-600 px-2">
    </div>
</template>

<script setup lang="ts">
  import { search} from '~/components/searchNote';



</script>

<style scoped>

</style>