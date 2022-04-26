import '../Assets/Styles/scss/category.scss'

const Categorys = ({categories}) => {
  const quantity = categories.length -1 // emparejo el indice = 0
  return (
  <div className='container category-box'>
    { categories.map((cat,index)=>{
      return(
      <span key={`${cat}${index}`}>
        {/* Concatena > para las categorias */}
       {( index < quantity ) ? `${cat}  > ` : ` ${cat}` } 
      </span>)
    })
    }
  </div>
  )
}

export default Categorys