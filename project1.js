var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
  
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value; // Get input value
  
    // Create new li element
    var li = document.createElement('li');
  
    // Add class
    li.className = 'list-group-item';

    var newText = document.createTextNode(newItem)
    var descriptionNode = document.createTextNode(description) //added description
  
    // Add text node with input value
    li.appendChild(newText);
    li.appendChild(descriptionNode);
    
    

  //---------------------------------------------------------------------------

  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);


  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-success btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('edit'));
  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}

//----------------------------------------------------------------------
// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//--------------------------------------------------------------------------------

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li'); //getting all the li tags
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }