// resturant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image elements
    const restaurantImage = document.createElement('img');
    restaurantImage.src = 'https://example.com/restaurant-image.jpg';
    restaurantImage.alt = 'Restaurant Image';
    restaurantImage.height = '300';
    pageContent.appendChild(restaurantImage);

    // Create and append restaurant name
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'The Golden Curry';
    pageContent.appendChild(restaurantName);

    // Create and append restaurant description
    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = 'A cozy and family-friendly dining experience at The Golden Curry.';
    pageContent.appendChild(restaurantDescription);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;