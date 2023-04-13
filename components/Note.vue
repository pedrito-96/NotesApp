<template>
    <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-[2rem]">
        <div v-for="nota in notes" :key="nota.id" class="relative h-80 w-80 drop-shadow-2xl rounded-lg"
        :class="nota.color">
            <p class="text-white p-7 w-full h-fit break-words">{{nota.content}}</p>
            <p class="absolute bottom-5 right-5 text-white">{{nota.date}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { notes } from '~/components/addNote';

//  import { NoteProps } from "./Note.props";

// defineProps<NoteProps>();

// const props = defineProps({
//     content: String,
//     date: String,
// })

</script>
