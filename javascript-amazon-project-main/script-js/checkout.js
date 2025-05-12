import { renderOrderSummary } from './checkout/orderSummery.js'
import { renderOrderSummary } from './checkout/paymentSummery.js'
import { loadProducts } from '../data/products.js'
//import '../data/cart-calss.js'
//import '../data/backend-practice.js'

loadProducts(() => {
	renderOrderSummary()
	orderPaymrntSummary()
})
