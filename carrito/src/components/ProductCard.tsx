import React, { useState } from 'react'
import { Cart } from './Icons';



export type Product = {
   code: number,
    name: string,
    price: number,
    isAvailable: boolean
    
    
}

type ProductCardProp = {
    product: Product,
    setAgregads: number[],
    addToCart: (product: Product) => void
}

function ProductCard({ addToCart, product, setAgregads} : ProductCardProp) {
    const {name, price, isAvailable} = product;

   

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-[1.02] p-6 flex flex-col items-center text-center">
  {/* Imagen placeholder */}
  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
    <span className="text-3xl">📦</span>
  </div>

  {/* Nombre */}
  <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{name}</h1>

  {/* Precio */}
  <p className="text-md font-semibold text-blue-600 mb-2">${price}</p>

  {/* Estado */}
  <span
    className={`px-3 py-1 text-xs font-medium rounded-full mb-4 ${
      isAvailable
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    }`}
  >
    {isAvailable ? 'Disponible' : 'No disponible'}
  </span>

  {/* Botón */}
  <button
    onClick={() => addToCart(product)}
    disabled={!isAvailable || setAgregads.includes(product.code)}
    className="w-full px-4 py-2 rounded-lg font-medium text-white transition 
               bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    {setAgregads.includes(product.code) ? 'Agregado' : 'Agregar'}
  </button>
</div>
  )
}

export default ProductCard