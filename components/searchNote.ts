import { ref, watch } from 'vue'
import { notes } from '~/components/addNote';

export const search: Ref<String> = ref('');


// watch(search, () => {
// notes.value = notes.value.filter(n => n.content.toLowerCase().includes(search.value.toLowerCase()));
// // console.log("CAMBIATO")
// console.log(notes.value)
// })

// export function filteredList() {
//     return notes.value.filter((n) =>
//       n.content.toLowerCase().includes(search.value.toLowerCase())
//     );
//   }

//così funziona --> ho dovuto mettere searchedNotes nel v-for di Note.vue 
export const searchedNotes = computed(() => {
    return notes.value.filter((n) => {
      return (
        n.content.toLowerCase()
          .includes(search.value.toLowerCase())
        //.indexOf(search.value.toLowerCase()) != -1
      );
    });
});

