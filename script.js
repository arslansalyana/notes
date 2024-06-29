const createBtn = document.querySelector('.create-btn');
const notesContainer = document.querySelector('.notes-container');
// const notes = document.querySelectorAll('.input-box');

function storeNotes(){
    localStorage.setItem('notes1', notesContainer.innerHTML);
}
function getNotes(){
    const notes = localStorage.getItem('notes1');
    if(notes){
        notesContainer.innerHTML = notes;
    }
}

getNotes();

createBtn.addEventListener('click', ()=>{
    const inputBox = document.createElement('p');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    const img = document.createElement('img');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    storeNotes();
})


notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        storeNotes();
    }
})

notesContainer.addEventListener('keyup', (e)=>{
    if (e.target.classList.contains('input-box')){
        storeNotes();
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault();
    }
});
