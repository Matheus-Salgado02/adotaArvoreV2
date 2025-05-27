const {Router} = require('express');
const { getArvoreControlador } = require('../controladores/arvore');
const router = Router();


router.get('/',getArvoreControlador)


module.exports = router