const { response } = require('express')
const axios = require('axios');
const utils = require('../utils/utils');

const itemsPutForQuery = async(req, res = response) =>{
    try {
        // Tomo el valor q del parametro que viene, para tener información
        const query = Object.values(req.query) 
        //Obtengo los datos desde la api
        const resp = await axios.get(`${utils.api_url}/sites/MLA/search?q=${query}&limit=${utils.limitProductsSearch}`) 
        //Descontruyo los objetos que necesito, de esta manera no tengo que volver a hacer otra llamada a la api para saber el id de categorias
        const {itemsFilter, categories_id} = utils.getItemsFilter(resp, utils.limitProductsSearch)
        const categories = await categorysForId(categories_id)
        res.json({
            author: utils.getAuthor(),
            categories,
            items: itemsFilter,
        })
    } catch (error) {
        res.json({
            error:'No se encontro producto'
        })
    }
}



const categoryPutForQuery = async(req,res =response) =>{
    try { 
        // Tomo el valor q del parametro que viene, para tener información
        const {query} = req.params
        //Obtengo los datos desde la api
        const resp = await axios.get(`${utils.api_url}/sites/MLA/search?q=${query}&limit=${utils.limitProductsSearch}`) 
        //Busco la categorias
        const {categories_id} = utils.getItemsFilter(resp, utils.limitProductsSearch)
        const categories = await categorysForId(categories_id)
        res.json({
            categories,
        })
    } catch (error) {
        res.json({
            error:'No se encontro producto'
        })
    }
}


const categorysForId = async (res) =>{
    try {
        const resp = await axios.get(`${utils.api_url}/categories/${res}`)
        const categories = resp.data.path_from_root
        var categoriesMatch = ''
        categories.map((cat,index)=>{
            index < (categories.length)-1 /// coloco -1 porque el index empieza desde 0
            ? categoriesMatch += (cat.name).toString() + ','
            : categoriesMatch += (cat.name).toString() 
        })
        // slip lo utiizo para que ponga en un objeto, separado en comas
        return categoriesMatch.split(',')
    } catch (error) {
        console.log('No se encontro categoria por ID')
    }
}


const itemsPutForId = async(req, res = response)=>{
try {
    const {id} = req.params
    // en este caso hago las dos peticiones a las api, en la primera es necesario todo lo del producto
    // en la segunda busca el texto plano de la descripción para usarlo
    const resp = await axios.get(`${utils.api_url}items/${id}`)
    const respDescription = await axios.get(`${utils.api_url}items/${id}/description`)
    const itemForId = utils.getItemForId({resp: resp, respDescription:respDescription})
    res.json({
        author: utils.getAuthor(),
        item : itemForId
    })
} catch (error) {
    res.json({
        error: 'No se encontro item por ID'
    })
}
}


module.exports = {
    itemsPutForQuery,
    itemsPutForId,
    categorysForId,
    categoryPutForQuery,
}