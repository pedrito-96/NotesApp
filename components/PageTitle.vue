<template>
    <div>
        <h1 class="text-center text-4xl">
{{title.toUpperCase()}}        
</h1>
      </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Titolone'
    }
})
</script>

<style scoped>

</style>