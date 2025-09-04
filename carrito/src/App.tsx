import { use, useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Products from './components/Products'
import { allProducts } from './products/products'
import { type Product } from './components/ProductCard'
import { Switch } from '@headlessui/react'

function App() {
  const [count, setCount] = useState(0)
  const [cart,setCart]= useState<Product[]>([]);
  const [showCart, setShowCart]= useState(false);
  const[agregado, setAgregado] = useState<number[]>([]);
  const[toast, setToast] = useState(false);
  const[toastBuy, setToastBuy] = useState(false);
  const[toastDel, setToastDel] = useState(false);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    if (theme === 'dark') {
     document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }


  const handleDeleteProduct = (code: number) => {

    setCart(cart.filter((p) => p.code !== code));
    setAgregado(agregado.filter((id) => id !== code));
    setToastDel(!toastDel)
    setTimeout(() => setToastDel(false), 2000)

  }
  const addToCart = (product: Product) => {
    setToast(true);

    setTimeout(() => setToast(false), 2000 )
    setCart([...cart, product]);
    setAgregado([...agregado, product.code])
  }

  const handleBuy = () => {
    setCart([]);
    setToastBuy(!toastBuy);
    setTimeout(() => setToastBuy(false), 2000)
  }



  return (
    <> 
     
      <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 px-6 py-8 transition">
         <nav className="w-full bg-white dark:bg-gray-800 shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10 transition">
          {toast && (
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                Producto agregado al carrito ✅
            </div>
          )}
          {toastDel && (
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
                Producto eliminado del carrito ✅
            </div>
          )}
          {toastBuy && (
             <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                Compra hecha con exito ✅
            </div>

          )}
        <h1 className="text-2xl font-bold text-gray-800">Carrito de Compras</h1>

       <button
      onClick={() => setShowCart(!showCart)}
      className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
    >
      {showCart ? "Cerrar Carrito" : "Ver Carrito"}
    </button>
    <button onClick={handleTheme}>Cambiar</button>

      </nav>
  
  <div className="flex justify-center mb-6">
    
  </div>

  {/* Productos */}
  <Products addToCart={addToCart} setAgregads={agregado} />

 
  {showCart && (
  <div className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">🛒 Mi Carrito</h2>

  {cart.length === 0 ? (
    <p className="text-gray-500 dark:text-gray-400">No hay productos en el carrito</p>
  ) : (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {cart.map((product: Product) => (
        <li key={product.code} className="flex justify-between items-center py-3">
          <div>
            <span className="text-gray-700 dark:text-gray-200 font-medium">{product.name}</span>
            <button
              onClick={() => handleDeleteProduct(product.code)}
              className="ml-3 text-red-500 hover:text-red-700 text-xs"
            >
              🗑️ Eliminar
            </button>
           
          </div>
          <span className="text-blue-600 font-semibold">${product.price}</span>
        </li>
        
      ))}
    </ul>
  )}
   <button onClick={handleBuy} >Finalizar Compra</button>
</div>
)}
</div>
    </>
  )
  
}

export default App
