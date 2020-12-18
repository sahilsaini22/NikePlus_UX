const express = require('express');
const Router = express.Router();
const auth = require('../../middleware/auth');
const Product = require('../../models/Product');

//import { Router } from 'express';
//import auth from '../../middleware/auth';
// Item Model


//const router = Router();
const router = Router;

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error('No items');

    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) throw Error('No items');

    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});



router.post('/', async (req, res) => {
  const newProduct= new Product({
    description: req.body.description,
    type: req.body.type,
    price: req.body.price ,
    sport: req.body.sport ,
    rating: req.body.rating ,
    category: req.body.category ,
    discount: req.body.discount ,
    newp: req.body.newp,
    imagepath: req.body.imagepath
  });

  try {
    const products = await newProduct.save();
    if (!products) throw Error('Something went wrong saving the item');

    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});




module.exports = router
//export default router;
