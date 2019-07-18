const express = require('express');
const productRouter = express.Router();

const products = [
    {
        id: 0,
        imageUrl: 'images/products/just-shapes-and-beats.jfif',
        cost: 8.00,
        name: 'Just Shapes and Beats',
        manufacturer: 'Berzerk Studios',
        details: ["digital"],
        quantity: 0,
    },
    {
        id: 1,
        imageUrl: 'images/products/breath-of-the-wild-game.webp',
        cost: 60.00,
        name: 'Breath Of The Wild',
        manufacturer: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 0,
    },
    {
        id: 2,
        imageUrl: 'images/products/halo-5.jfif',
        cost: 45.00,
        name: 'Halo 5',
        manufacturer: '343 Studios',
        details: ["physical"],
        quantity: 0,
    },
    {
        id: 10,
        imageUrl: 'images/products/mad-catz.jfif',
        cost: 24.99,
        name: 'Wired Xbox One Controller',
        manufacturer: 'Mad Catz',
        details: ['Color: Blue Ocean'],
        quantity: 0,
    },
    {
        id: 11,
        imageUrl: 'images/products/xbox-one-wireless-controller.jfif',
        cost: 60.00,
        name: 'Wireless Xbox One Controller',
        manufacturer: 'Microsoft',
        details: ['2nd Ed.', 'Bluetooth Enabled', 'Color: Overwatch Edition'],
        quantity: 0,
    },
    {
    id: 13,
        imageUrl: 'images/products/switch-controllers-green-pink.jfif',
        cost: 76.49,
        name: 'Switch Joy-Cons',
        manufacturer: 'Nintendo',
        details: ['Color: Neon Green/Neon Pink'],
        quantity: 0,
    },
    {
        id: 15,
        imageUrl: 'images/products/super-soaker.jpg',
        cost: 99.99,
        name: 'Super Soaker 50',
        manufacturer: 'Nerf',
        details: ['NEW', 'Vintage'],
        quantity: 0,
    },
];

productRouter.route('/')
    .get((req, res) => {
        res.setHeader('Content-Type','application/json');
        res.json(products)
    })

module.exports = productRouter;
