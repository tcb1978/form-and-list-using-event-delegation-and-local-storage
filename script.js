const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.items');
// get items from local storage or an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
e.preventDefault();
const text = (this.querySelector('[name=item]')).value;
const item = {
    text : text,
    done : false
};

// add line items to items array
items.push(item);

// use populateList to return html that displays list
populateList(items, itemsList);

//set items to local storage
localStorage.setItem('items', JSON.stringify(items));

//clear form input
this.reset();
}

function populateList(items = [], itemList) {
    //create an HTML list to display data
    itemList.innerHTML = items.map((item, index) => {
        return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? 'checked' : '' }/>
                <label for="item${index}">${item.text}</label>
            </li>
        `;
    }).join(''); //join array into one string
}

function toggleDone(e) {
    if (!e.target.matches('input')) return // skip unless an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    //set items to local storage
    localStorage.setItem('items', JSON.stringify(items));
    // update list again
    populateList(items, itemsList);
}

// listen for submit and grab form items 
addItems.addEventListener('submit', addItem);
// listen for a click on the un-ordered listStyle
itemsList.addEventListener('click', toggleDone);


//persit
populateList(items, itemsList)