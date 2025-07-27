const addBtn = document.querySelector('#add');
const parentElement = document.querySelector('ul');
let inputValue = document.querySelector('#textInput');
const emptyText = document.querySelector('.emptyText');

//add
addBtn.addEventListener('click', (e) => {
    if(emptyText){
        emptyText.remove();
    }
    console.log(inputValue.value);
    let newLi = document.createElement('li');
    newLi.innerHTML = `<h4>${inputValue.value}</h4>
                    <button id="edit">Edit</button>
                    <button id="remove">Remove</button>`

    parentElement.appendChild(newLi);
    inputValue.value = "";
//remove
    const removeBtn = newLi.querySelector('#remove');  //capturing removebtn as it's appended
    removeBtn.addEventListener('click', (e) => {
        newLi.remove(); // Remove the entire <li>
        if(parentElement.children.length <= 0){
            parentElement.appendChild(emptyText);
        }
    });
//edit
    const editBtn = newLi.querySelector('#edit'); //capturing editbtn as it's appended
    editBtn.addEventListener('click', (e) => {
        if(editBtn.textContent == "Edit"){
            editBtn.textContent = "Done";
            editBtn.style.background = "green";

            const liItem = editBtn.previousElementSibling;
            const liInput = document.createElement('input');
            liInput.value = liItem.textContent;

            //styling of input field
            liInput.placeholder = 'Add to list...';
            liInput.id = 'textInput';
            liInput.style.background = "#646363ff";
            liInput.style.color = "#ffffff";
            liInput.style.marginRight = "10px";
            liInput.style.border = "none";
            
            liItem.parentElement.replaceChild(liInput, liItem);
        } else{
            editBtn.textContent = "Edit";
            editBtn.style.background = "#ffd102";
            
            const liInput = editBtn.previousElementSibling;
            const liItem = document.createElement('h4');
            liItem.textContent = liInput.value;
            liInput.parentElement.replaceChild(liItem, liInput);
        }
    })
})

