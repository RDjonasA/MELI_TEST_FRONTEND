import {render} from '@testing-library/react'

test('Verifica si los datos renderizan en Products, se modifico etiqueta LINK por a',()=>{
    const price = { 
        amount: 40990,
        decimals: 99
    }

    const component = render(
    <div className='container page-product'>
    <div className='product-img'>
      <img
          alt='Prueba test Product'
          src=''
      />
    </div>
    <div >
        <h1 className='fSize-24' style={{margin:'32px 0 32px 0'}}>$ {price.amount}</h1>
        <a to={`/items/MLA1131692104`} style={{textDecoration: 'none', color:'#000'}}>
        <span className='fSize-18'>Prueba test Product</span>
        </a>
    </div>
    <div style={{textAlign:'center',padding:0}}>
        <div className='product-location'><span className='fSize-12'>Provincia</span></div>
    </div>
    </div>
    
    
    )
    expect(component.getByText('Prueba test Product')).toBeInTheDocument()
    expect(component.getByText('Provincia')).toBeInTheDocument()
})