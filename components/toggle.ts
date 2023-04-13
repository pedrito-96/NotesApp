import { ref } from 'vue';
export const showModal = ref(false);


export function toggleModal() {
  showModal.value =!showModal.value;
  overflowHidden();
}

export function piumeno() {
    let pm: string;

  if(showModal.value == false){
    return pm = '+';
  }
else {
    return pm = '-';
}
}


export function overflowHidden() {
if(showModal.value == true){
   document.body.style.overflow = 'hidden';
}
else {
   document.body.style.overflow = 'auto';
}
console.log(showModal.value)
}