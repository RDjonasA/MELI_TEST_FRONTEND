import ic_log from '../Assets/img/Logo_ML@2x.png'
import ic_search from '../Assets/img/ic_Search.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Assets/Styles/scss/search.scss'

const Navbar = () => {
  const [inputSearch,setInputSearch] = useState('')
  // utilizo en navegar para poder buscar los artículos
  const navigate = useNavigate() 

  const submitSearch = (e) => {
    e.preventDefault()
    // pregunto si es mayor que 0 para que no haga un submit con un vacio 
    if(inputSearch.trim().length>0){
      navigate(`/items?search=${inputSearch}`)
      window.location.reload()
      setInputSearch('')
    }else setInputSearch('')
  }

  const handleInputChange = (e) => {
    setInputSearch(e.target.value)
  }

  return (
    <div className='nav-search'>
      <div className="container" style={{padding:0}}>
        <div className="navbar-search justify-content-center" style={{padding:'12px 0 12px 0'}}>
          <div className='log-search'>
            <Link to='/'>
            <img
            alt='Mercado Libre - Donde comprar y vender de todo'
            height={36}
            src={ic_log}/>
            </Link>
          </div>
          <form onSubmit={submitSearch} className="input-group">
            <input value={inputSearch} onChange={handleInputChange} className='col input-search'  placeholder='Nunca dejes de buscar'/>
            <span className='input-group-text'>
            <img
            onClick={submitSearch}
            alt='Buscar productos'
            width='auto'
            src={ic_search} />
            </span>
          </form>
        </div>
      </div>
    </div>
  
    )
}

export default Navbar