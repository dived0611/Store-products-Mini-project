import React from 'react'
import Rating from './Rating'
export default function Product({product}) {
  return    <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price + "$"}</td>
                <td>{product.category}</td>
                <td>{product.description.slice(0, 100)}</td>
                <td><img style={{width: "100px", height: "100px"}} src={product.image} /></td>
                <td><Rating count={product.rating.count} rate={product.rating.rate} /></td>

            </tr>

    
  
}

