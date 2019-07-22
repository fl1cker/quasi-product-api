const express = require('express');
const shoppingCartRouter = express.Router();

const tbdServerSideShoppingCart = [{
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
},];

shoppingCartRouter.route('/')
    .get((req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(tbdServerSideShoppingCart);
    })
    // .post((req, res) => {
    //     shoppingCart = addOrUpdateCart(shoppingCart, {req.id, req.quantity})
    //     res.send(newId);
    // })
    // .patch((req, res) => {
    //     const index = shoppingCart.findIndex(x => x.id === id);
    //     if (index) {
    //         shoppingCart[index].quantity = req.quantity;
    //         res.send(204);
    //     }
    //     res.send(404);
    // })
    // .delete((req, res) => {
    //     const index = shoppingCart.findIndex(x => x.id === id);
    //     if (index) {
    //         shoppingCart.slice(index, 1);
    //         res.send(204);
    //     } else {
    //         res.send(404);
    //     }
    // });

// function addOrUpdateCart(shoppingList, product) {
//     const newShoppingList = Object.assign([], shoppingList);
//     const index = newShoppingList.map(x => x.id).indexOf(product.id);
//     if (index >= 0) {
//         newShoppingList[index].quantity += product.quantity;
//     } else {
//         newShoppingList.push({ ...product, quantity: 1 });
//     }
//     return newShoppingList;
// }

module.exports = shoppingCartRouter;