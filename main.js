var  toggleCheck=function(){

  let parent=this.parentNode;

  parent.classList.toggle('checked');
};

  var deleteTodo = function(){
  let todoLi=this.parentNode;
  todoLi.remove();
};


var addTodo = function(todo) {
  let li=document.createElement('li');

  let label=document.createElement('label');
  label.innerHTML=todo;

  let checkbox=document.createElement('input');
  checkbox.type="checkbox";
  checkbox.onclick=toggleCheck;

  let deleteButton=document.createElement('button');
  deleteButton.innerHTML="Delete";
  deleteButton.className="delete";
  deleteButton.onclick=deleteTodo;
  deleteButton.classList.add('delete');

 // Nest to do elements in list-item
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  let todolist = document.querySelector('#todoList');
  // Append todo to todolist
  todolist.appendChild(li);
};

document.getElementById('add').onclick = function() {
  // Store the button's parent element (.addTodo <div>) in a variable
  var parent = this.parentNode;
  // Store the input, which is the *first* child element of the .addTodo <div>
  var addTextInput = parent.children[0];

  if(addTextInput.value===""){

  return;

} else{


  // Addtodo
  addTodo(addTextInput.value);
  // Resetinput
  addTextInput.value="";
  }
};