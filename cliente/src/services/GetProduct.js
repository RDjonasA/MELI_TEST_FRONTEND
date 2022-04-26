import{ useEffect, useState } from 'react'

export const GetProduct = (searchquery) => {
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] =useState([])
    const [isLoading, setIsLoading] = useState(true);
    const URL = `http://localhost:3002/api/items?q=${searchquery}`
    useEffect(() => {
        fetch(URL)
        .then((response) =>  {
          if(response.ok) return response.json()
          if(!response.ok)
          return Promise.reject(
            setIsLoading = true
            ); 
         })
        .then((res) =>{ 
          setProducts(res.items)
          setCategorys(res.categories)
          setIsLoading(false)
        })
        
      }, [])
    return {
        products,categorys,isLoading
    }
}