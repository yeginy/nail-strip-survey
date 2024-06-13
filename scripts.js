const designs = [
    { id: 1, url: 'Nail%20Strip%20Survey/images/Nail_Design_1.jpg', name: 'Design 1' },
    { id: 2, url: 'Nail Strip Survey/images/Nail_Design_2.jpg', name: 'Design 2' },
    { id: 3, url: 'Nail Strip Survey/images/Nail_Design_3.jpg', name: 'Design 3' },
    { id: 4, url: 'Nail Strip Survey/images/Nail_Design_4.jpg', name: 'Design 4' },
    { id: 5, url: 'Nail Strip Survey/images/Nail_Design_5.jpg', name: 'Design 5' },
    { id: 6, url: 'Nail Strip Survey/images/Nail_Design_6.jpg', name: 'Design 6' },
    { id: 7, url: 'Nail Strip Survey/images/Nail_Design_7.jpg', name: 'Design 7' },
    { id: 8, url: 'Nail Strip Survey/images/Nail_Design_8.jpg', name: 'Design 8' },
    { id: 9, url: 'Nail Strip Survey/images/Nail_Design_9.jpg', name: 'Design 9' },
    { id: 10, url: 'Nail Strip Survey/images/Nail_Design_10.jpg', name: 'Design 10' },
    { id: 11, url: 'Nail Strip Survey/images/Nail_Design_11.jpg', name: 'Design 11' },
];

let currentDesign = 0;

async function fetchImages() {
    // For dynamic fetching, if needed in the future
    // const response = await fetch('/api/images');
    // designs = await response.json();
    displayNextDesign();
}

function displayNextDesign() {
    if (currentDesign < designs.length) {
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = `<div class="card" data-name="${designs[currentDesign].name}" style="background-image: url('${designs[currentDesign].url}');">
        </div>`;
    } else {
        alert('That is all. Thank you!');
    }
}

function swipe(action) {
    console.log(`You ${action} ${designs[currentDesign].name}`);
    currentDesign++;
    displayNextDesign();
}

document.addEventListener('DOMContentLoaded', fetchImages);
