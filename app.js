var li = document.getElementById("too")

function addtask(){
 var inp = document.getElementById("inputtask")
 
 var liss = document.createElement("li")
 
var itemList = document.createTextNode(inp.value)
liss.appendChild(itemList)
li.appendChild(liss)
inp.value  = ""


     

}