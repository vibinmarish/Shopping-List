var form = document.getElementById("addForm");
var itemList=document.getElementById("items");

form.addEventListener('submit',addItem);

itemList.addEventListener("click",removeItem);

function addItem(e){
    e.preventDefault();
    
    var newItem = document.getElementById("item").value;
     // Create new li element
    var li= document.createElement("li");
     // Add class
    li.className="list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var btn=document.createElement("button");
    // Add classes to del button
    btn.className="btn btn-danger btn-sm float-right delete";
    // Append text node
    btn.appendChild(document.createTextNode("X"));
     // Append button to li
    li.appendChild(btn);
      // Append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}