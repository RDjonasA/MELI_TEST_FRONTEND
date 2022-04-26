# Test FrontEnd MELI
[Ejecutar proyecto](#ejecutar-proyecto)


## Ejecutar proyecto

### Cliente

```
cd cliente
```
```
npm install
```
```
npm run start
```

#### Pruebas Cliente

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

### Tecnologías utilizadas Cliente / FrontEnd
#### React.js
#### React router dom

#### Al iniciar se hizo un maquetado rapido con Boostrap, luego se maqueto con SCSS/SASS

##### Para test se utilizo   testing-library/react 

## Se utilizo los siguientes endpoints y enlaces
- Para home “/”
- Resultados de la búsqueda: “/items?search=”
- Detalle del producto:  “/items/:id”
- Detalle del producto: "/items/:id/description"
- Pagina no encontrada "*" cualquier otra dirección

#### Comentarios

```
- Para la solución de con un ID se pueda ver un producto,
utilice un ENDPOINT generado por backend con las categorias del producto para facil acceso.
- Agregue mensajes de error en las pantallas, y un cargando.
- Para recibir las imagenes una calidad mejor,
agregue un llamado directo a la api de ML para el producto.
- Actualmente no es responsive mobile.
```

### Tecnologías para Server / BackEnd
##### Node.js 
##### Axios
##### Nodemon se utilizo en la rama dev para que se reinicie el servidor por cada cambio
##### Para test se utilizo supertest y mocha


##Resultados de búsqueda, visualiza solo 4 productos
Este limite se encuentra en el backend, pudiendo cambiar por un mayor límite de productos

#### Comentarios

```
Agregue un endpoint para buscar las categorias , ya que si lo hacia desde front end podría perder rendimiento para las llamadas hasta llegar a las categorias
http://localhost:3002/api/items/categorys/:search
```
