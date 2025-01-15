const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const bucketList = document.getElementById('bucketList');
const resetButton = document.getElementById('resetButton');

addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
        addItemToList(itemText);
        itemInput.value = '';
    } else {
        alert('Please enter an item!');
    }
});

function addItemToList(text) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'item-text';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', () => editItem(li, span));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    bucketList.appendChild(li);
}

function editItem(li, span) {
    const newText = prompt('Edit your item:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
    }
}

resetButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the list?')) {
        bucketList.innerHTML = '';
    }
});
