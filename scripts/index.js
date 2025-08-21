let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagItemsCount();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagItemsCount();
}

function displayBagItemsCount() {
    let bagItemsCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0) {
        bagItemsCountElement.style.visibility = 'visible';
        bagItemsCountElement.innerText = bagItems.length;
    } else {
        bagItemsCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement) return;
    let innerHtml = '';
    items.forEach(item => {
    innerHtml += `
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs.${item.current_price}</span>
                <span class="original-price">Rs${item.original_price}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="add-bag-btn" onclick="addToBag(${item.id});">Add to Bag</button>
        </div>
    `;
    });
    itemsContainerElement.innerHTML = innerHtml;
};
