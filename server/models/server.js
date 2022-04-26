const express = require('express')
const cors    = require('cors')
const port   = 3002

class Server {
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT || port
        this.itemsRoutePath = '/api'
        this.middlewares()
        this.routes()
    }
    
    middlewares(){
       // CORS
       this.app.use(cors())

       //Lectura y parseo del body 
       this.app.use(express.json())
    }

    routes(){
       this.app.use(this.itemsRoutePath,require('../routes/index'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Conectado en el puerto:',this.port)
        })
    }
}

module.exports = Server