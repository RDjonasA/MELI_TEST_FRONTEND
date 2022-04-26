import{ useEffect, useState } from 'react'

export const GetProductForId = (id) => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const URL = `http://localhost:3002/api/items/${id}`
    useEffect(() => {
        fetch(URL)
        .then((response) =>{
          if(response.ok) return response.json()
          return Promise.reject(
            setIsLoading = false
          )
        })
        .then((res) =>{ 
          setProduct(res.item)
          setIsLoading(false)
        });
      }, [])
      return{
        product,isLoading
      }
}