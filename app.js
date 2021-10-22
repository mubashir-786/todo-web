var li = document.getElementById("too")
var todoList = []


function addtask(){
    
    var inp = document.getElementById("inputtask").value
   todoList.push(inp) 

  document.getElementById("too").innerText = ""

  for(var i = 0 ; i < todoList.length ; i++ ) {
    var liss = document.createElement("li")
    var txt = document.createTextNode(todoList[i])
    liss.appendChild(txt)

    li.appendChild(liss)
   
  

    //delete button
    var btnn = document.createElement("button")
    btnn.innerText = "Delete"
    btnn.className = "clrbtn"
    liss.appendChild(btnn)
   

    btnn.onclick = function clr (){
      
    
        // var item = e.target
        // if(item.todoList[0]==='clrbtn'){
        //     var todo= item.parentElement
        //     todo.remove()
        // }
  
        
  console.log(i)
    }
    //done button
  var dbtn = document.createElement("button")
  dbtn.innerText = "Done"
  dbtn.className = "donebtn"
  liss.appendChild(dbtn)
  }

  
  
}














// function addtask(){
//  var inp = document.getElementById("inputtask")
 
//  var liss = document.createElement("li")
 
// var itemList = document.createTextNode(inp.value)
// var btnn = document.createElement("button")
// btnn.innerText = "Delete"
// liss.appendChild(itemList)
// li.appendChild(liss)
// liss.appendChild(btnn)

// inp.value  = ""


// btnn.onclick = function clrr() {


// } 

     

// }