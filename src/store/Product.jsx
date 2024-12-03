import React from 'react'

export default function Product({products}) {
  return (
    <>
        {products.slice(0, 10).map(product => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price + "$"}</td>
                <td>{product.category}</td>
                <td>{product.description.slice(0, 100)}</td>
                <td><img style={{width: "100px", height: "100px"}} src={product.image} /></td>
                <td>{product.rating.rate}</td>

            </tr>
        ))}
    </>
  )
}