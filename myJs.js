const todoInput = document.querySelector(".input");
const todoBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".lista");


//addEventListeners
document.addEventListener("DOMContentLoaded", getDataStored)
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete)

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

	//add to local storage
	saveLocal(todoInput.value);

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

}

function checkDelete(e){
	const x = e.target;
//delete
	if (x.classList[0] === "delete"){
		const y = x.parentElement;
		removeDataStored(y);
		y.remove();
	}
	//check
	if (x.classList[0] === "check"){
		const y = x.parentElement;
		x.parentElement.classList.toggle("checked");
	}
}



function saveLocal(todo){
	let itens;
	// Check for data stored
	if (localStorage.getItem("itens") === null){

		itens=[];
	}
	else{
		itens = JSON.parse(localStorage.getItem("itens"));
	}
	itens.push(todo);
	localStorage.setItem("itens", JSON.stringify(itens));
}

function getDataStored(){
	let itens;
	// Check for data stored
	if (localStorage.getItem("itens") === null){
		console.log("no data stored");
		itens=[];
	}
	else{
		itens = JSON.parse(localStorage.getItem("itens"));
		console.log("data found")
	}
	itens.forEach(function(todo){
		const div = document.createElement('div');
		div.classList.add("div-item");
		todoList.appendChild(div);
		//li
		const item = document.createElement('li');
		item.innerText = todo;
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

	});
}

function removeDataStored(todo){
	let itens;
	if (localStorage.getItem("itens") === null){

		itens=[];
	}
	else{
		itens = JSON.parse(localStorage.getItem("itens"));
	}
	const todovalue = todo.children[0].innerText;
	itens.splice(itens.indexOf(todovalue), 1);
	localStorage.setItem("itens", JSON.stringify(itens));
}
