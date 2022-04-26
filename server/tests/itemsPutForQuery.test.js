const { json } = require('express')
const request = require('supertest')
const router = require('../routes')

const data ={
    "author": {
        "name": "Jonatan Ariel",
        "lastname": "Ruiz Diaz"
    },
    "categories": [
        "Autos",
        " Motos y Otros",
        "Autos y Camionetas"
    ],
    "items": [
        {
            "id": "MLA1131692104",
            "title": "Bmw Serie 1 1.6 120i Sport Line 177cv",
            "price": {
                "currency": "USD",
                "amount": "28500"
            },
            "picture": "http://http2.mlstatic.com/D_745845-MLA49635824140_042022-I.jpg",
            "condition": "Usado",
            "free_shipping": false,
            "location": "Bs.As. G.B.A. Norte"
        },
        {
            "id": "MLA1128819519",
            "title": "Toyota Land Cruiser 4.5 200 V8 D4-d 235cv At",
            "price": {
                "currency": "USD",
                "amount": "41900"
            },
            "picture": "http://http2.mlstatic.com/D_672345-MLA49437036270_032022-I.jpg",
            "condition": "Usado",
            "free_shipping": false,
            "location": "Bs.As. G.B.A. Norte"
        },
        {
            "id": "MLA1126962399",
            "title": "Audi A5 Sportback 2.0 Tfsi Stronic Quattro 230cv",
            "price": {
                "currency": "USD",
                "amount": "46900"
            },
            "picture": "http://http2.mlstatic.com/D_616336-MLA49324196766_032022-I.jpg",
            "condition": "Usado",
            "free_shipping": false,
            "location": "Bs.As. G.B.A. Norte"
        },
        {
            "id": "MLA1106582850",
            "title": "Amarok 3.0 Tdi V6 258cv Comfortline 4x4 Aut 2022",
            "price": {
                "currency": "ARS",
                "amount": "7649000"
            },
            "picture": "http://http2.mlstatic.com/D_932245-MLA49654774836_042022-I.jpg",
            "condition": "Nuevo",
            "free_shipping": false,
            "location": "Capital Federal"
        }
    ]
}
describe('GET /items?q=auto',()=>{
    it ('Retorna codigo 200 si los datos corresponden items?q=auto',()=>{
    request(router)
     .get('api/items?q=auto')
     .set('Accept','application/json')
     .expect('Content-Type',json)
     .expect(data)
    })
})