var add  = document.getElementById("ButtonAdd");
var check  = document.getElementById("ButtonCheck");
var del = document.getElementById("ButtonDelB")

// check.addEventListener("click",TodoCheck);
add.addEventListener("click",TodoAdd);
// del.addEventListener("click",TodoDelB)

function TodoAdd(e){

    e.preventDefault();
    var to_do = document.getElementById("newText").value;
    var producto = document.getElementById("producto");
    
    
    /*
    var currentListHTML = list.innerHTML;
    console.log(currentListHTML)
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" class="prueba" /> ${to_do} <br>`
    document.getElementById("todoText").value = "";*/
    
    var div  = document.createElement("div");    
    var check = document.createElement("button");  
    var delB = document.createElement("button");
    var label = document.createElement("label");     
                                         
    check.innerHTML = "CHECK";
    delB.innerHTML = "DELETE";

    // check.type = "check";                  
    // check.name = "todo";
    // delB.type = "delB";                  
    // delB.name = "todo";
    label.textContent = to_do;                           
                        
    document.getElementById("producto").appendChild(label);
    document.getElementById("producto").appendChild(check);
    document.getElementById("producto").appendChild(delB);
    producto.getElementById("producto").appendChild(div);
    
    
    to_do ="";
    }
    // function TodoCheck(){
    
    //     var todos = document.getElementsByName("todo");
    
    //     todos.forEach(elemento => {
    //         elemento.checked = true;
    //     })
    
    // }
    // function TodoDelB(){

    //   var todos = document.getElementsByName("todo");
      
    //   todos.forEach(elemento => {
        
    //   if (elemento.checked){
    //       elemento.parentElement.remove();
    //   }
      
    //   })
      
          
    //   }