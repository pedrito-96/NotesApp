<template>
    <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-[2rem]">
    <!-- ref="target" :style="{transform: cardTransform, transition: 'transform 0.25 ease-out'}" -->
            <div v-for="nota in searchedNotes" :key="nota.id" class="relative h-80 w-80 drop-shadow-2xl rounded-lg"
            :class="nota.color" 
           >

            <p class="text-white p-7 w-full h-fit break-words">{{nota.content}}</p>
            <p class="absolute bottom-5 right-5 text-white">{{nota.date}}</p>
            <button class="absolute top-0 right-0" @click="deleteNote(nota.id)">
                <svg class="hover:opacity-50" height="2rem" id="Layer_1"  viewBox="0 0 512 512" width="2rem" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z"/></g></svg>
            </button>
        
        
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { notes, deleteNote } from '~/components/addNote';
import { useMouseInElement } from '@vueuse/core';
import { search, searchedNotes} from '~/components/searchNote';

// card cool hover effect
// const target = ref(null)

// const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

// const cardTransform = computed( () => {
//     const MAX_ROTATION = 2;
//     //handles x-axis
//     const rX = (MAX_ROTATION/2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
    
//     //handles y-axis
//     const rY= (MAX_ROTATION/2 - (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

//     return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
// })

// ##########################


//  import { NoteProps } from "./Note.props";

// defineProps<NoteProps>();

// const props = defineProps({
//     content: String,
//     date: String,
// })

</script>
