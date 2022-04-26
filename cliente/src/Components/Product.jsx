import { Link } from "react-router-dom"
import shipping from '../Assets/img/ic_shipping.png'

const Product = ({price,id,picture,title,location,free_shipping}) => {
 let priceFormat = new Intl.NumberFormat('de-DE').format(price.amount)
  return (
    <>
        <div className='container page-product'>
          <div className='product-img'>
            <img
                alt={title}
                src={picture}
            />
          </div>
          <div >
              <h1 className='fSize-24' style={{margin:'32px 0 32px 0'}}>$ {priceFormat}
              <span style={{marginLeft: '1rem'}}>{free_shipping && <img src={shipping}/>}</span></h1>
              <Link to={`/items/${id}`} style={{textDecoration: 'none', color:'#000'}}>
              <span className='fSize-18'>{title}</span>
              </Link>
          </div>
          <div style={{textAlign:'center',padding:0}}>
              <div className='product-location'><span className='fSize-12'>{location}</span></div>
          </div>
          </div>
          <hr/>
      </>
  )
}

export default Product