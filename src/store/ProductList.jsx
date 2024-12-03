import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Product from './Product'

export default function ProductList() {
const [products, setProducts] = useState([])

const getProducts =()=>{ //? fetch API
    const products = fetch("https://fakestoreapi.com/products").
        then(responce => responce.json().
        then(responce => setProducts(responce))
        .catch(err => console.log(err))
    ) 
    
}
    useEffect(() => {
        getProducts() //? fetch API
        
        
    }, [])


    


  return (
    <div className='container-fluid w-80 mx-autoç,,,,,,,,,,,,,,,,,,,,,,,,, '>
    <center>      <h1 style={{padding: "20px"}}>Product List</h1>     </center>
      <table className="table" >
        <thead>
            <tr>
                <th>id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <Product products={products} />
        </tbody>
      </table>
    </div>
  )
}
