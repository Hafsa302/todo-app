function addtodo(){
    var input = document.getElementById("todo-input");
    // console.log(input.value);

    var list = document.getElementById("listItems");

    var listElement = document.createElement("li");

    var listText = document.createTextNode(input.value);

    listElement.appendChild(listText);
    //  ****** DELBUTTON***************
    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete")

    delbtn.appendChild(delbtnText);
    delbtn.setAttribute("onclick"," deltodo(this) ")
    
    listElement.appendChild(delbtn);

    // *************** EDIT BUTTON************

    var Editbtn = document.createElement("button");

    var EditbtnText = document.createTextNode("Edit");

    Editbtn.appendChild(EditbtnText);
    listElement.appendChild(Editbtn);
    
    Editbtn.setAttribute("onclick"," edittodo(this) ")

    list.appendChild(listElement);
    
    console.log(listElement);

    input.value = "";

}

function deletetodo(){
    var list = document.getElementById("listItems");

    // list.innerHTML = "";
    list.remove(); 

}

function deltodo(e){

   console.log(e.parentNode.remove());

}

function edittodo(e){
    // var currentli = e.parentNode.firstChild.nodeValue;
    console.log(e.parentNode.firstChild.nodeValue)
    // console.log(currentli)
    var inputField = prompt("Enter updated value",currentli);

    currentli = inputField;
}