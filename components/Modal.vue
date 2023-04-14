<template>

    <div class="bg-slate-600/80 w-full h-full flex justify-center z-10">
      <div class="flex flex-col justify-center items-center w-9/12 h-full z-90 m-0 ">
        <!-- <input type="text" placeholder="new note" class="border placeholder:pl-2 rounded-2xl"> -->
        <textarea v-model.trim="newNote" id="story" name="story" rows="5" cols="33" maxlength="250" placeholder="new note" class="border w-full text-2xl  placeholder:p-2 placeholder:text-[3rem] md:placeholder:text-[4rem] lg:placeholder:text-[5rem] p-2" ></textarea>
       <div class="flex flex-col justify-between md:lg:flex-row w-full">
         <span class=" text-red-200 self-start ">{{errorMessage}}</span>
         <span class=" text-blue-200 self-end">{{countNoteLength()}}/250 characters</span>
        </div>

        <button @click="addNote()" class="color-gradient-green text-white rounded-2xl mx-2 px-3 py-0.5 w-full hover:bg-teal-600 hover:scale-105 mt-2 border border-indigo-600 text-2xl">Add note</button>
        <!-- <button @click="toggleModal()" class="color-gradient-purple text-white rounded-2xl mx-2 px-3 py-0.5 w-full hover:bg-red-600 hover:scale-105 mt-2 border border-indigo-600">Close</button> -->
      </div>
    </div>

</template>

<script setup lang="ts">
import { toggleModal } from '~/components/toggle';
import { addNote, notes, newNote, countNoteLength, errorMessage} from '~/components/addNote';

</script>

