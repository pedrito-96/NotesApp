<template>
    <div class="flex justify-center mt-2">
        <input v-model.trim="search" type="text" placeholder="look for a note"
        class="w-[30%] border-slate-800 focus:border-indigo-600 placeholder:p-2 pl-2">
    </div>
</template>

<script setup lang="ts">
  import { search} from '~/components/searchNote';
</script>

<style scoped>

</style>