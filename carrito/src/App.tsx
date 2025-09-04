import { use, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Products from './components/Products'
import { allProducts } from './products/products'
import { type Product } from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)
  const [cart,setCart]= useState<Product[]>([]);
  const [showCart, setShowCart]= useState(false);
  const[agregado, setAgregado] = useState<number[]>([]);
  const[toast, setToast] = useState(false);



  const handleDeleteProduct = (code: number) => {

    setCart(cart.filter((p) => p.code !== code));
    setAgregado(agregado.filter((id) => id !== code))

  }
  const addToCart = (product: Product) => {
    setToast(true);

    setTimeout(() => setToast(false), 3000 )
    setCart([...cart, product]);
    setAgregado([...agregado, product.code])



  }




  return (
    <> 
     
      <div className="min-h-screen bg-gray-50 px-6 py-8">
        <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          {toast && (
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
  Producto agregado al carrito ✅
</div>
  )}
        <h1 className="text-2xl font-bold text-gray-800">Carrito de Compras</h1>

       <button
      onClick={() => setShowCart(!showCart)}
      className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
    >
      {showCart ? "Cerrar Carrito" : "Ver Carrito"}
    </button>

      </nav>
  
  <div className="flex justify-center mb-6">
    
  </div>

  {/* Productos */}
  <Products addToCart={addToCart} setAgregads={agregado} />

 
  {showCart && (
  <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 transition">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Mi Carrito</h2>

    {cart.length === 0 ? (
      <p className="text-gray-500">No hay productos en el carrito</p>
    ) : (
      <ul className="divide-y divide-gray-200">
        {cart.map((product: Product) => (
          <li
            key={product.code}
            className="flex justify-between items-center py-3"
          >
            <div>
              <span className="text-gray-700 font-medium">{product.name}</span>
              <button 
                onClick={() => handleDeleteProduct(product.code)} 
                className="ml-3 text-red-500 hover:text-red-700 text-xs"
              >
                🗑️ Eliminar
              </button>
            </div>
            <span className="text-blue-600 font-semibold">
              ${product.price}
            </span>
          </li>
        ))}
      </ul>
    )}

    {/* Total */}
    {cart.length > 0 && (
      <>
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <span className="text-lg font-bold text-gray-800">Total</span>
          <span className="text-lg font-bold text-green-600">
            ${cart.reduce((total: number, product: Product) => total + product.price, 0)}
          </span>
        </div>

        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow">
          Finalizar compra
        </button>
      </>
    )}
  </div>
)}
</div>
    </>
  )
  
}

export default App
