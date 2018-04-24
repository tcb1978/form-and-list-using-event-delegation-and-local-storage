const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


function addItem(e) {
e.preventDefault();
const text = (this.querySelector('[name=item]')).value;
const item = {
    text : text,
    done : false
};
items.push(item);
populateList(items, itemsList);
this.reset();
}

function populateList(items = [], itemList) {
    //create an HTML list to display data
    itemList.innerHTML = items.map((item, index) => {
        return `
            <li>
                <label for="">${item.text}</label>
            </li>
        `
    }).join(''); //join array into one string
}

// listen for submit and grab form items 
addItems.addEventListener('submit', addItem);