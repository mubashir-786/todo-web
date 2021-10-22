var li = document.getElementById("too")
var todoList = []


function addtask(){
    
    var inp = document.getElementById("inputtask").value
   
  if (inp == "") {
    
    alert("Please Enter")
  }
 else{
  todoList.push(inp) 
 }
  
  taskperform()
}

function taskperform(){
  document.getElementById("too").innerText = ""

  for(var i = 0 ; i < todoList.length ; i++ ) {
    var liss = document.createElement("li")
    var txt = document.createTextNode(todoList[i])
    liss.appendChild(txt)
liss.className = "animate__animated  animate__fadeInLeft"
    li.appendChild(liss)
   
  

    //delete button
    var btnn = document.createElement("button")
    btnn.innerText = "Delete"
    btnn.className = "clrbtn"
    liss.appendChild(btnn)
    btnn.onclick =  clr(i)
   
    //Edit button
  var dbtn = document.createElement("button")
  dbtn.innerText = "Edit"
  dbtn.className = "donebtn"
  liss.appendChild(dbtn)
  dbtn.onclick = edit(i)


// done button
  var donebtn = document.createElement("button")
  donebtn.innerText = "Done"
  donebtn.className = "donebtn"
  liss.appendChild(donebtn)
  donebtn.onclick = done(i)






  }
  document.getElementById("btn").innerText = "Add Task"
  document.getElementById("inputtask").value = ""
}




function clr(i){
  return function(){
    todoList.splice(i,1)
    taskperform()

  }
 
 
}
function edit(i){
  return function(){
    
  (document.getElementById("inputtask").value = todoList[i])
     todoList.splice(i,1)
     add()
  
  }

}

function add(){
  document.getElementById("btn").innerText = "Edit"
}
function done(i){

   console.log(todoList[i])
   

}


     

