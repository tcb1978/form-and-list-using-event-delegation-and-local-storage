  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = [];


  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value();
    const item = {
        text : text,
        done : flase
    };
    items.push(item);
    this.reset();
  }
  // listen for submit and grab form items 
  addItems.addEventListener('submit', addItem);