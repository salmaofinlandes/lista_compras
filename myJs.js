const todoInput = document.querySelector(".input");
const todoBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".lista");
console.log(todoBtn, todoInput, todoList);


todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete)

function checkDelete(e){
	console.log(e.target);
}


function addTodo(event){
	
	event.preventDefault();
	
	//div-item
	const div = document.createElement('div');
	div.classList.add("div-item"); 
	todoList.appendChild(div);
	//li
	const item = document.createElement('li');
	item.innerText=todoInput.value;
	div.appendChild(item);
	
	//check btn
	const checkBtn = document.createElement('button');
	checkBtn.innerHTML = "<i class='fas fa-check'></i>";
	checkBtn.classList.add("check");
	div.appendChild(checkBtn);
	
	//delete btn
	const deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
	deleteBtn.classList.add("delete");
	div.appendChild(deleteBtn);
	
	//clear input value
	
	todoInput.value="";
	
	//set cookies 
	
	setCookie()
}



function setCookie(){
	document.cookie = "value =" + document.getElementsByTagName("li").innerHTML
}
