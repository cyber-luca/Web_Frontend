const menuButton = document.querySelector('.menu');
const list0 = document.getElementById('list0');

const menu = [
    {
        nome: "Margherita",
        prezzo: 6.50
        
    },
    {
        nome: "Capricciosa",
        prezzo: 12.00
    },
    {
        nome: "Norma",
        prezzo: 8.50
        
    },
     {
        nome: "4 stagioni",
        prezzo: 8.50
        
    },
    {
        nome: "Diavola",
        prezzo: 9
        
    }
];

// Funzione per popolare il menu
function populateMenu() {
    list0.innerHTML = ''; // Svuota il contenitore
    menu.forEach(pizza => {
        const pizzaItem = document.createElement('p');
        pizzaItem.textContent = `${pizza.nome}: €${pizza.prezzo.toFixed(2)}`;
        list0.appendChild(pizzaItem); // Corretto il riferimento al contenitore
    });
}

// Gestione del click sul bottone Menu
menuButton.addEventListener('click', () => {
    list0.classList.toggle('visible'); // Mostra/nasconde il menu
    if (list0.classList.contains('visible')) {
        populateMenu(); // Popola il menu se visibile
        menuButton.textContent = 'Menu Pizze ˅'; // Freccia verso il basso
    } else {
        menuButton.textContent = 'Menu Pizze >'; // Freccia verso destra
    }
});
