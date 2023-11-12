let products = [
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Donner DDP-80 Digital-Piano',
        price: 679.99,
        img: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlhbm98ZW58MHx8MHx8fDA%3D",
    }
]

const list = document.getElementById('list');
const form = document.getElementById('form');

// createdCard();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    products.push({
        id: Math.floor(Math.random() * 10000),
        name: e.target.productName.value,
        price: e.target.price.value,
        img: e.target.urlPhoto.value
    })
    
    for (let i = 0; i < e.target.length - 1; i++) {
       const element = e.target[i];
       element.value = '';
    }

    displayAllCards()
   
})


function displayAllCards () {
    list.innerHTML = '';
    for ( let el of products) {
        const card = document.createElement('div');
        const imgWrap = document.createElement('figure');
        const img = document.createElement('img');
        const imgName = document.createElement('figcaption');
        const producName = document.createElement('p');
        const price = document.createElement('span');
        const produPrice = document.createElement('p');
        const delBtn = document.createElement('button');

        card.className = "card";
        delBtn.className = "del-btn";
        producName.className = "funcCont";
        produPrice.className = "funcCont"
        price.className = "price"
        img.alt = "img";
        img.src = el.img;

        producName.textContent = el.name;
        produPrice.textContent = el.price;

        price.textContent = "Price: ";
        imgName.textContent = "Name: ";
        delBtn.textContent = "X"

        price.appendChild(produPrice);
        imgName.appendChild(producName);
        imgWrap.appendChild(img);
        card.append(delBtn, imgWrap, imgName, price);

        list.appendChild(card)

        delBtn.addEventListener('click', () => {
            products = products.filter(it => el.id != it.id);
            displayAllCards();
        })

    }
}

