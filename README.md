# Test FrontEnd MELI
[Ejecutar proyecto](#ejecutar-proyecto)


## Ejecutar proyecto

### Client

```
cd client
```
```
npm install
```
```
npm run start
```

#### Pruebas Client

 #### `npm test`

### Server

 ```
 cd server
 ```
 ```
 npm install
 ```
 ```
 npm run dev
 ```

#### Pruebas Server
 #### `npm test`

## Tecnologías utilizadas

### Client
#### React.js
#### React router dom

#### Al iniciar se hizo un maquetado rapido con Boostrap, luego se maqueto con SCSS/SASS

##### Para test se utilizo   testing-library/react 

#### Comentarios

```
- Agregue mensajes de error en las pantallas, y un cargando.
- Para recibir las imagenes una calidad mejor, agregue un llamado directo a la api de ML para el producto.
- Actualmente no es responsive mobile.
```

### Server
##### Node.js 
##### Axios
##### Nodemon se utilizo en la rama dev para que se reinicie el servidor por cada cambio
##### Para test se utilizo supertest y mocha


#### Comentarios

```
Agregue un endpoint para buscar las categorias , ya que si lo hacia desde front end podría perder rendimiento para las llamadas hasta llegar a las categorias
http://localhost:3002/api/items/categorys/:search
```
