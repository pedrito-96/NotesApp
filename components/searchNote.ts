import { ref, watch } from 'vue'
import { notes } from '~/components/addNote';

export const search = ref('');


watch(search, () => {
notes.value = notes.value.filter(n => n.content.toLowerCase().includes(search.value.toLowerCase()));
// console.log("CAMBIATO")
console.log(notes.value)
})

// export function filteredList() {
//     return notes.value.filter((n) =>
//       n.content.toLowerCase().includes(search.value.toLowerCase())
//     );
//   }