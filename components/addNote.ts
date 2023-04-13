import { ref } from 'vue'
import { toggleModal } from './toggle';

type Note = {
    id: number;
    content: string;
    date: string;
    color: string;
} 

let color: string = '';

function colora(){
    if(notes.value.length % 2 === 0)
    color = 'color-gradient-purple'
    else
    color = 'color-gradient-green'

    return color;
}

export const newNote = ref("")

export function countNoteLength(): number{
    let c = newNote.value.split('');
    return c.length;
}

// export const notes : Ref <Note[]> = ref([
export const notes = ref<Note[]>([
    {
        id: 1,
        content: 'This is a note',
        date: '01-01-2023',
        color: 'color-gradient-purple'
    },
    {
        id: 2,
        content: 'This is another note',
        date: '02-01-2023',
        color: 'color-gradient-green'
    },
    {
        id: 3,
        content: 'This is a third note',
        date: '03-01-2023',
        color: 'color-gradient-purple'
    }
]);



const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;


export const errorMessage = ref("")

export function addNote() {

    if(newNote.value.length < 10)
        return errorMessage.value = "Note must be at least 10 characters long"
    
    notes.value.push({
        id: notes.value.length + 1,
        content: newNote.value,
        date: currentDate,
        color: colora()
    });
    
    console.log(notes)
    newNote.value = "";
    errorMessage.value = ""
toggleModal();


}