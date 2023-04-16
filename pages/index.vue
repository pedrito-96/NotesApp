<script lang="ts" setup>
import { toggleModal } from '~/components/toggle';
import { showModal, overflowHidden } from '~/components/toggle';
import { onMounted } from 'vue';

 onMounted(() => {
  overflowHidden()})
  
</script>

<template>
  <div class="">
    <PageTitle title="notes"></PageTitle>
    <search-note></search-note>
    <AddButton class="fixed bottom-7 right-7 flex justify-center mt-2 z-50 lg:bottom-10 lg:right-10" @click="toggleModal()"></AddButton>
    
    <div class="flex justify-center">
      <Note/>
    </div>
      <!-- <Note content="ciao ciao" date="12 Aprile"></Note>
      <Note content="ciao" date="13 Aprile"></Note>
      <Note content="ciao" date="14 Aprile"></Note> -->
    <Modal v-if="showModal" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

  </div>
</template>
