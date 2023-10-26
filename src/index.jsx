import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import Home from './routes/Home'
import Products from './routes/Products'
import { Provider } from 'react-redux'
import { store } from './app/store'
import SingleProduct from './features/single-products/SingleProduct'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>This is the wrong route</div>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products/:idCategory',
				element: <Products />,
			},
			{
				path: '/products/:idCategory/singleProduct/:idProduct',
				element: <SingleProduct />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
