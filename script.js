let list = localStorage.getItem("list");
  if (list != null) {
    showList();
  }
let addbtn = document
  .getElementById("add")
  .addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let list = localStorage.getItem("list");
    

    if (list == null) {
      listObj = [];
    } else {
      listObj = JSON.parse(list);
    }
    listObj.push(addTxt.value);

    localStorage.setItem("list", JSON.stringify(listObj));
    addTxt.value = "";
    showList();
  });
function showList() {
  let list = localStorage.getItem("list");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }
  let str = "";
  listObj.forEach(function(element,index) {
   

    str +=
      `<div class="card my-3">
      <div class="card-body d-flex flex-md-row flex-column justify-content-md-between justify-content-center">
      <p class="text-center text-md-left"> ${element}  </p>
      <button class="btn btn-primary" onclick="deleteList(this.id)" id="${index}">Done<i class="bi bi-check-lg"></i></button> </div> </div>`;
  });
  let todo=document.getElementById("list");
  console.log(list.length);
  console.log(list);
  if(list.length != 0){
  todo.innerHTML=str;}
  else{
    todo.innerHTML=`<h5>Start Adding!!</h5>`; 
  }
}
function deleteList(index){
console.log("i am deleting",index);
let list = localStorage.getItem("list");
    

    if (list == null) {
      listObj = [];
    } else {
      listObj = JSON.parse(list);
    }
    listObj.splice(index,1);
    localStorage.setItem("list", JSON.stringify(listObj));
    
    showList();
}

