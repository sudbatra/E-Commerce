const router = require('express').Router();
const { Categpry, Product } = require('../../models');

// THe `/api/categories` endpoint

router.get('/', async (req, res) => {
    // finding all cateogories
    const category = await Category.findAll({
        include: {moduel:Product}
    });

    return res.status(200).json(category)
    // be sure to include its associated products
});

router.get('/:id', (req, res) => {
    // finding one category by its 'id' value
    Category.findByPk(req.params.id,{include:{model:Product}}).then({category}=>{

        res.status(200).json(category);
    })
    // be sure to include its associated Products
});

router.post('/', async(req, res) => {
    // create a new category
    const.newCat= await Categpry.create({
        category_name: req.body.category_name
    })
    return res.json(newCat)

});

router.put('/:id', async(req, res) => {
    // update a category by its 'id' value
    const upCat = await Category.update({
        category_name: req.body.category_name
    },{
        where:{
            id:req.params.id
        }
    })
    return res.json({
        id:req.params.id,
        category_name: req.body.category_name
    })
});

router.delete('/:id', async(req, res) => {
    // delete a category by its 'id' value
    const delCat = await Categpry.destroy({where:{ id: req.params.id} });

    return res.send(`Category destroyed ID:${req.params.id}`)
});

module.exports = router;