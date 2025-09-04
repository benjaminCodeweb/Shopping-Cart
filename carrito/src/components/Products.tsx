import React, { useState } from 'react'
import { allProducts } from '../products/products';
import ProductCard from './ProductCard';
import { Cart } from './Icons';

function Products({addToCart, setAgregads }) {


  return (
     <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      

      {/* Grid de productos */}
      <div className="py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {allProducts.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              addToCart={addToCart}
              setAgregads={setAgregads}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products