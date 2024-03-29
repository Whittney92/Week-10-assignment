let id = 0;

// added an event listener for the 'clicking' of the add button before creating a new row in the table.
document.getElementById('add').addEventListener('click', () => {

//  Created a Grocery item, Price, and Recipient table or "Key"
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-gift').value;
    row.insertCell(1).innerHTML = document.getElementById('new-price').value;
    row.insertCell(2).innerHTML = document.getElementById('new-recipient').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementByID('new-gift').value = '';
});

// created a delete button to allow the shopper to delete as he/she goes.
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
      console.log(`Deleting row with id: item-${id}`);
      let elementToDelete = document.getElementById(`item-${id}`) 
      elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}