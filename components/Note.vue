<template>
    <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-[2rem]"  ref="target" 
    :style="{transform: cardTransform, transition: 'transform 0.25 ease-out'}" >
            <div v-for="nota in notes" :key="nota.id" class="relative h-80 w-80 drop-shadow-2xl rounded-lg"
            :class="nota.color" 
           >

            <p class="text-white p-7 w-full h-fit break-words">{{nota.content}}</p>
            <p class="absolute bottom-5 right-5 text-white">{{nota.date}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { notes } from '~/components/addNote';
import { useMouseInElement } from '@vueuse/core';

// card cool hover effect
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed( () => {
    const MAX_ROTATION = 2;
    //handles x-axis
    const rX = (MAX_ROTATION/2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
    
    //handles y-axis
    const rY= (MAX_ROTATION/2 - (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

// ##########################


//  import { NoteProps } from "./Note.props";

// defineProps<NoteProps>();

// const props = defineProps({
//     content: String,
//     date: String,
// })

</script>
