const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', (req, res) => {

  Tag.findAll({include:{model:Product}}).then((tag)=>{
    res.json(tag);
  })

});

router.get('/:id', async(req, res) => {

const findTag = await Tag.findByPk(req.params.id,{include:{model:Product}})

return res.json(findTag)

});

router.post('/', (req, res) => {

  const {tag_name} = req.body;
  Tag.create({tag_name}).then((created)=>{
    res.json(created);
  })
});

router.put('/:id', (req, res) => {

  Tag.update({tag_name : req.body.tag_name},{where:{ id: req.params.id}}).then((update)=>{
res.json(update)
  })
});

router.delete('/:id', async(req, res) => {

  const tag = await Tag.destroy({where:{
    id: req.params.id
  }})
   res.json(tag);
  
});

module.exports = router;
