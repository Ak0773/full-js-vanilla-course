import { products } from './products.js'

export let cart

loadFormStorage()

export function loadFormStorage() {
	cart = JSON.parse(localStorage.getItem('cart'))

	if (!cart) {
		cart = [{
			productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
			quantity: 2,
			deliveryDays: '1',
		}, {
			productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
			quantity: 1,
			deliveryDays: '2',
		}]
	}
}

function saveTostorage() {
	localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {  // Added quantity parameter
	let matchingItem

	cart.forEach((cartItem) => {  // Fixed typo (catrItem -> cartItem)
		if (productId === cartItem.productId) {
			matchingItem = cartItem
		}
	})

	if (matchingItem) {
		matchingItem.quantity += quantity  // Add selected quantity instead of 1
	} else {
		cart.push({
			productId: productId,
			quantity: quantity,  // Use passed quantity instead of default 1
			deliveryDays: '1',
		})
	}

	saveTostorage()
}

export function removeFromCart(productId) {
	const newCart = []
	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCart.push(cartItem)
		}
	})
	cart = newCart

	saveTostorage()
}

export function updateDeliveryOption(priductId, deliveryOptionId) {
	let matchingItem

	cart.forEach((cartItem) => {  // Fixed typo (catrItem -> cartItem)
		if (priductId === cartItem.productId) {
			matchingItem = cartItem
		}
	})
	matchingItem.deliveryOptionId = deliveryOptionId

	saveTostorage()
}