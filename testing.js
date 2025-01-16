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

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', () => toggleComplete(li, checkbox));

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'item-text';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', () => editItem(span));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    bucketList.appendChild(li);
}

function editItem(span) {
    const newText = prompt('Edit your item:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
    }
}

function toggleComplete(li, checkbox) {
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

resetButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the list?')) {
        bucketList.innerHTML = '';
    }
});
