let item = document.querySelector("#item");
let toDOBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == 'Enter') {
            addToDo(this.value);
            save();
            this.value = "";
        }
    }
)
function save(){
    let lis= document.querySelectorAll(".box li");
    console.log(lis);
    let data=[];
    lis.forEach(element => {
        data.push(element.textContent);
        
    });
    if(data.length===0){
        localStorage.removeItem("lis")
    }
    else{
        localStorage.setItem("lis",JSON.stringify(data));
    }
}

const addToDo = (item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
${item} 
<i class="fa-solid fa-xmark"></i>`;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
            save();
        }
        )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove();
            save();
        }
        )
    toDOBox.appendChild(listItem);
}
(
    function(){
        let localLis= JSON.parse(localStorage.getItem("lis"));
        localLis.forEach(element => {
            addToDo(element);
        });
    }
)();
