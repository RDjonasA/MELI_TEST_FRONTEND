const { json } = require('express')
const request = require('supertest')
const router = require('../routes')

/**
 * Testing getItemForId
 */

const data= {
    "author": {
        "name": "Jonatan Ariel",
        "lastname": "Ruiz Diaz"
    },
    "item": {
        "id": "MLA841085340",
        "title": "Auriculares Inalámbricos Sony Wh-ch510 Negro",
        "price": {
            "currency": "ARS",
            "amount": "4999"
        },
        "picture": "http://http2.mlstatic.com/D_933418-MLA40865317836_022020-I.jpg",
        "condition": "Nuevo",
        "free_shipping": true,
        "sold_quantity": 5000,
        "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Sony y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nAl ser on-ear, se apoyan en tus oídos cómodamente y te ofrecen una gran calidad de sonido. Tené preparados tus discos preferidos y usalos en viajes largos o actividades al aire libre."
    }
}


describe('GET /items/',()=>{
    it ('Retorna codigo 200 si los datos existen item/:id/',()=>{
    request(router)
     .get('api/items/MLA841085340')
     .set('Accept','application/json')
     .expect('Content-Type',json)
     .expect(data)
    })

    it ('Retorna codigo 200 si los datos existen item/:id/desciption',()=>{
        request(router)
         .get('api/items/MLA841085340/description')
         .set('Accept','application/json')
         .expect('Content-Type',json)
         .expect(data)
        })

})