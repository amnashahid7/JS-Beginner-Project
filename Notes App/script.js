let addBtn = document.querySelector("#addBtn");
 let main = document.querySelector("#main");

const saveNotes=()=>{
    let notes= document.querySelectorAll(".note textarea");
    console.log(notes);
    let data=[];
    notes.forEach(el => {
        data.push(el.value);
    });
    //console.log(data);
    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data));

    }
}

 addBtn.addEventListener(
    "click",
    function(){
        addNote();
    }
);


const addNote= (text="") =>{
    let note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
                <i class="edit far fa-edit"></i>
                <i class="save far fa-save"></i>
                <i class="delete far fa-trash-alt"></i>
            </div>
            <textarea>${text}</textarea>`;
            note.querySelector(".delete").addEventListener(
                "click",
                function(){
                    note.remove();
                    saveNotes();
                }
            )
            note.querySelector(".save").addEventListener(
                "click",
                function(){
                    saveNotes();
                }
            )
            note.querySelector("textarea").addEventListener(
                "focusout",
                function(){
                    saveNotes();
                }
            )
            main.appendChild(note);
            saveNotes();
}

(
    function(){
     let lsnotes = JSON.parse(localStorage.getItem("notes"));
     //console.log(lsnotes);
     if(lsnotes===null){
        addNote();
     }
     else{
        lsnotes.forEach(el =>{
            addNote(el);
        });
     }
    
     }
 )();
