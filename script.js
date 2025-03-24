let inputs = document.getElementById("inp");
let text = document.querySelector(".text");


function Add(){
    if(inputs.value == ""){ 
        alert("Please Enter Your Task ")
    }
    else{
        let newElement = document.createElement("ul")
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`
        document.querySelector(".text").appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click",remove);

        function remove(){
            newElement.remove()
        }
    }
}