import{ useEffect, useState } from 'react'

export const GetCategory = (search) => {
    const [cat, setCat] = useState([]);
    const URL_CATEGORY =`http://localhost:3002/api/items/categorys/${search}`
    useEffect(() => {
      fetch(URL_CATEGORY)
      .then((response)=>{
        if(response.ok) return response.json()
        return Promise.reject(
        )
      })
      .then((res) =>{
        setCat(res.categories)
      })
      },[])
      return{
        cat
      }
}




// const URL = `http://localhost:3002/api/items/categorys/${searchquery}`