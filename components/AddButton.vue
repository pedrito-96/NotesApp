<template>
    <div class="">
<button class="flex justify-center rounded-full border w-20 h-20 bg-slate-700 text-yellow-50 text-5xl animate-pulse hover:scale-105 leading-[4.5rem] ">
    {{ piumeno() }} 
</button>
    </div>
</template>

<script setup lang="ts">
import { piumeno} from '~/components/toggle';
</script>

<style scoped>

</style>