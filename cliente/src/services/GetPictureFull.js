import{ useEffect, useState } from 'react'

export const GetPictureFull = (id) => {
    const [picture, setPicture] = useState(null);
    const URLPICTURE =`https://api.mercadolibre.com/items/${id}`
    useEffect(() => {
      fetch(URLPICTURE)
      .then((response)=>{
        if(response.ok) return response.json()
        return Promise.reject(
        )
      })
      .then((res) =>{
        setPicture(res.pictures[0].url)
      })
      },[])
      return{
        picture
      }
}


