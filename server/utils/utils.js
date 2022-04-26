const limitProductsSearch = 4
const api_url = `https://api.mercadolibre.com/`

const getAuthor = () =>{
    return {
      name: 'Jonatan Ariel',
      lastname: 'Ruiz Diaz'
    };
}

const getItemsFilter = (resp,limit) =>{
    var itemsProducts = []
    var categories_id = resp.data.results[0].category_id
    for(let itemValue=0; itemValue < limit; itemValue++) {
		let currentItem = resp.data.results[itemValue];
		var itemData = {
	      'id': currentItem.id,
	      'title': currentItem.title,
	      'price': {
			'currency': currentItem.currency_id,
			'amount': currentItem.price.toString().split('.')[0], // Verifico objeto antes del .
			'decimals': currentItem.price.toString().split('.')[1] // Verifico luego del .
	      },
	      'picture': currentItem.thumbnail,
	      'condition': currentItem.condition === 'new' ? 'Nuevo' : 'Usado',
	      'free_shipping': currentItem.shipping.free_shipping,
        'location':currentItem.address.state_name
		}
		itemsProducts.push(itemData)
	}
    return {itemsFilter: itemsProducts,categories_id} // Cambio el nombre de itemsProducts a itemsFilter
}


// Se podria optimizar getItemsFilter && getItemForId si se condiciona para que se agregue los campos faltantes
const getItemForId = ({resp, respDescription})  => {
    let currentItem = resp.data
    const description = respDescription.data.plain_text
    var itemData = {
      'id': currentItem.id,
      'title': currentItem.title,
      'price': {
        'currency': currentItem.currency_id,
        'amount': currentItem.price.toString().split('.')[0], // Verifico objeto antes del .
        'decimals': currentItem.price.toString().split('.')[1] // Verifico luego del .
      },
      'picture': currentItem.thumbnail,
      'condition': currentItem.condition === 'new' ? 'Nuevo' : 'Usado',
      'free_shipping': currentItem.shipping.free_shipping,
      'sold_quantity': currentItem.sold_quantity,
      'description': description
    }
return itemData
}




// No especifico con : a la variable, ya que es lo mismo decir api_url : api_url  que api_url
module.exports = {
    api_url,
    limitProductsSearch,
    getAuthor,
    getItemsFilter,
    getItemForId
}