const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: 'Icode',
            email: 'icode@codes.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,        
        },
        {
            name: 'David',
            email: 'david@codes.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,        
        },
    ],
    products:[
        {
            name: 'Nike',
            img: './assets/img1.jpg',
            category: 'Shirt',
            price: 120,
            countInStock: 13,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Product',

        },
        
        {
            name: 'Nike',
            img: './assets/img2.jpg',
            category: 'Shirt',
            price: 60,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'High Quality Product',

        },

        {
            name: 'Nike',
            img: './assets/img3.jpg',
            category: 'Shirt',
            price: 20,
            countInStock: 5,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 10,
            description: 'High Quality Product',

        },
        {
            name: 'Nike',
            img: './assets/img5.jpg',
            category: 'Shirt',
            price: 100,
            countInStock: 0,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 10,
            description: 'High Quality Product',

        },




    ],
};

module.exports = data;