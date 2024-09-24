const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.get('/cart-total', (req, res) => {
  const { newItemPrice, cartTotal } = req.query;
  const totalPrice = (oldCartTotal, newItemPrice) =>
    parseFloat(oldCartTotal) + parseFloat(newItemPrice);
  res.status(200).json(totalPrice(newItemPrice, cartTotal).toString());
});

app.get('/membership-discount', (req, res) => {
  const { cartTotal, isMember } = req.query;
  const totalPrice = (isMember, cartTotal) =>
    isMember === 'true' ? cartTotal - 0.1 * cartTotal : cartTotal;
  res.status(200).json(totalPrice(isMember, parseFloat(cartTotal)).toString());
});

app.get('/calculate-tax', (req, res) => {
  const { cartTotal } = req.query;
  const finalAmount = (cartTotal) => cartTotal * 0.05;
  res.status(200).json(finalAmount(parseFloat(cartTotal)).toString());
});

app.get('/estimate-delivery', (req, res) => {
  const { shippingMethod, distance } = req.query;
  const estimatedDelivery = (shippingMethod, distance) => {
    if (shippingMethod.toLowerCase() === 'express')
      return Math.round(distance / 100).toString();
    if (shippingMethod.toLowerCase() === 'standard')
      return Math.round(distance / 50).toString();
    return '';
  };

  res
    .status(200)
    .json(estimatedDelivery(shippingMethod, parseFloat(distance)).toString());
});

app.get('/shipping-cost', (req, res) => {
  const { weight, distance } = req.query;
  const calculateCost = (weight, distance) => weight * distance * 0.1;
  res.json(calculateCost(parseFloat(weight), parseFloat(distance)).toString());
});

app.get('/loyalty-points', (req, res) => {
  const { purchaseAmount } = req.query;
  const calculateCost = (purchaseAmount) => purchaseAmount * 2;
  res.json(calculateCost(parseFloat(purchaseAmount)).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
