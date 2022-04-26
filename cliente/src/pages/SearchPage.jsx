import { useContext } from 'react'
import { useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Categorys from '../Components/Categorys'
import Loading from '../Components/Loading'
import Product from '../Components/Product'
import CategoryContext from '../context/CategoryContext'
import { GetProduct} from '../services/GetProduct'
import '../Assets/Styles/scss/product.scss'

const HomePage = () => {
   const {search} = useLocation()
   
   //  Mediante la ubicacion del path, luego del search= tomo el valor, asi puedo usarlo en la query
   let searchQuery = (search.split('='))[1]
   const {cate, get_Categorys} = useContext(CategoryContext)
   
   // Va a verificar en la api la busqueda, y guardar la categoria
   const {products,categorys,isLoading} = GetProduct(searchQuery)

   // SEO
   document.title=`Mercado Libre | ${searchQuery}`
   document.getElementsByTagName("META")[3].content=`Todo lo que estas buscando de: ${searchQuery}`
  // Se guarda la categoria en contexto para que se pueda utilizar
   useEffect(()=>{
      // Condiciono antes que llegue a disparar el reducer
    if(categorys !== undefined) get_Categorys(categorys)
   },[categorys]) 

  if (isLoading) return <Loading/>
  return (
  <>
  <Categorys categories={cate}/>
  <div className="container justify-content-center product-container-box">
      {
        products == undefined ? <h3>No se ha encontrado ningún item con ese valor</h3>
        :
        products.map(prod=>{
          return(
          <Product key={prod.id} id={prod.id} price={prod.price} picture={prod.picture} title={prod.title} location={prod.location} free_shipping={prod.free_shipping}/> 
          )
        })
      }
  </div>
  <br/>
  <br/>
  </>
  )
}


export default HomePage