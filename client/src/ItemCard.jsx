import React from 'react'

function ItemCard({item}) {
  return (
    <div>
        {/* <img src={item.image_id} alt={item.name}/> */}
        <p>{item.name}</p>
        {/* <p>{item.size}</p>
        <p>{item.description}</p>
        <button>Add to Quote</button> */}
    </div>
  )
}

export default ItemCard