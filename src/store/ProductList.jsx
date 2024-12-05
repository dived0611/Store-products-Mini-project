import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  //! Display products
  const displayProduct = () => {

    let productsTemp = [...products]
    
    if (searchInput) {
        productsTemp = productsTemp.filter(product => {
            const title = product.title.toLowerCase()
            const searchValue = searchInput.toLowerCase()
            return (
                title.includes(searchValue) ||
                product.id.toString().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue)
            )
        })
    }
    if (currentCategory) {
        productsTemp = productsTemp.filter(product => product.category === currentCategory)
    }

    if (productsTemp.length > 0) {
        return productsTemp.map((product, key) => {
            return <Product product={product} key={key}/>
        })
    }
    return <tr>
        <td colSpan={7}> No Items</td>
    </tr>
}

  //! Handle Search
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchInput.value;
    setSearchInput(searchValue);
  };

  //! Fetch Products
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  //! Fetch Categories
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((data) => setCategories(data))
    .catch((err) => console.error("Error fetching products Categories:", err));
  }
//! display categories
const handleClick = (category) => {
    
    setCurrentCategory(category);

    
}
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="container-fluid w-80 mx-auto">
      <center>
        <h1 style={{ padding: "20px" }}>Product List</h1>
      </center>
    {/*//! button catagories */}
    {
      categories.map((category) => (
        <button
          key={category}
          className="btn btn-primary m-1 w-20"
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
        ))
    }

      {/* //! Search Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-row m-2">
          <input
            type="text"
            id="searchInput"
            className="form-control w-50 border border-gray"
            placeholder="Enter search product"
          />
          <button type="submit" className="btn btn-primary mx-2">
            Search
          </button>
        </div>
      </form>

      {/* Product Table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProduct()}</tbody>
      </table>
    </div>
  );
}
