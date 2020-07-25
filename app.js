var todoVal = document.getElementById("list");

function addTodo(){

    //todoitem
    var todoItem = document.getElementById("todoItem");
    var li = document.createElement("li");
    var line = document.createElement("hr")
    li.appendChild(line);
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);

    //checkbox
    var check = document.createElement("input");
    check.setAttribute("type","checkbox")
    check.setAttribute("class","box");
    li.appendChild(check);
        
    //deletebutton

    var delbut = document.createElement("button");
    //var delbutVal = document.createTextNode("delete");
    delbut.setAttribute("class","btn btn-outline-danger")
    delbut.setAttribute("class","fa fa-trash-o")
    delbut.setAttribute("style","font-size:23px;color:red;margin-left:10px")
    delbut.setAttribute("onclick","delVal(this)")
    //delbut.appendChild(delbutVal)
    li.appendChild(delbut)

    //editbutton

    var editbut = document.createElement("button");
    //var editbutVal = document.createTextNode("Edit")
    editbut.setAttribute("class","btn btn-outline-primary")
    editbut.setAttribute("class","fa fa-edit")
    editbut.setAttribute("style","font-size:23px;color:blue;margin-left:5px")
    editbut.setAttribute("onclick","editVal(this)")
    //editbut.appendChild(editbutVal);
    li.appendChild(editbut);


    




    todoVal.appendChild(li);
    todoItem.value = "";

}

function delVal(e){
 
     e.parentNode.remove();

}

function editVal(e){
    var update = prompt("Edit Todo!",e.parentNode.childNodes[1].nodeValue);
    e.parentNode.childNodes[1].nodeValue = update


}




function delAll(){
    todoVal.innerHTML = ""
}



var input = document.getElementById("todoItem");
input.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
})

