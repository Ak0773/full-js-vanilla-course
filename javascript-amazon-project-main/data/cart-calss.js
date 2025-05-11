class Cart {
	cartItems
	localStorageKey

	constructor(localStorageKay) {
		this.localStorageKey = localStorageKay
		this.loadFormStorage()
	}

	loadFormStorage() {
		this.cartItems = JSON.parse(localStorage.getItem('this.localStorageKey'))

		if (!this.cartItems) {
			this.cartItems = [{
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

	saveTostorage() {
		localStorage.setItem('this.localStorageKey', JSON.stringify(this.cartItems))
	}

	addToCart(productId) {  // Added quantity parameter
		let matchingItem

		this.cartItmes.forEach((cartItem) => {  // Fixed typo (catrItem -> cartItem)
			if (productId === cartItem.productId) {
				matchingItem = cartItem
			}
		})

		if (matchingItem) {
			matchingItem.quantity += quantity  // Add selected quantity instead of 1
		} else {
			this.cartItems.push({
				productId: productId,
				quantity: quantity,  // Use passed quantity instead of default 1
				deliveryDays: '1',
			})
		}

		this.saveTostorage()
	}

	removeFromCart(productId) {
		const newCart = []
		this.cartItems.forEach((cartItem) => {
			if (cartItem.productId !== productId) {
				newCart.push(cartItem)
			}
		})
		this.cartItems = newCart

		this.saveTostorage()
	}

	updateDeliveryOption(priductId, deliveryOptionId) {
		let matchingItem

		this.cartItems.forEach((cartItem) => {  // Fixed typo (catrItem -> cartItem)
			if (priductId === cartItem.productId) {
				matchingItem = cartItem
			}
		})
		matchingItem.deliveryOptionId = deliveryOptionId

		this.saveTostorage()
	}
}

const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business')

console.log(cart)
console.log(businessCart)