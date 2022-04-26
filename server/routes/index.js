//npm run dev
const {Router} = require('express')
const { itemsPutForId, itemsPutForQuery , categoryPutForQuery} = require('../controllers/items')
const router = Router()

router.get('/items/:id',itemsPutForId)

router.get('/items/:id/description',itemsPutForId)

// Se utilizo este endpoint para hacer una llamada directa a las categorias de los productos
router.get('/items/categorys/:query',categoryPutForQuery)

// Es utilizado para la busqueda /api/items?q=​:query 
router.get('*',itemsPutForQuery) 

module.exports = router