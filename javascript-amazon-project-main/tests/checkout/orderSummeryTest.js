import { renderOrdersummery } from '../../scripts/checkout/orderSummery.js'
import { loadFormStorage, cart } from '../../scripts/checkout/cart.js'

descride('test suite: renderOrderSummery', () => {

	const productId1 = 'e43638ce - 6aa0-4b85 - b27f - e1d07eb678c6'
	const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'

	beforeAll((done) => {
		loadProducts(() => {
			done()
		})
	})

	beforeEach(() => {
		spyOn(localStorage, 'setItem')

		document.quertySelector('.js-cart-container').innerHTML = `
		<div class='js-cart-contianer'></div>
		<div class='js-payment-summary'></div>
		`

		spyOn(localStorage, 'getItem').and.callFake(() => {
			return JSON.stringify([{
				productId: productId1,
				quantity: 2,
				deliveryOptionId: '1'
			}, {
				productId: productId2,
				quantity: 1,
				deliveryOptionId: '2'
			}
			])
		})
		loadFormStorage()

		renderOrderSummery()
	})


	it('displays the cart', () => {

		expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2)
		expect(document.querySelector(`.js-Product-qubantity-${productId1}`).innerText).toContain('Quantity: 2')
		expect(document.querySelector(`.js-Product-qubantity-${productId2}`).innerText).toContain('Quantity: 1')

		document.quertySelector('.js-cart-container').innerHTML = ''
	})

	it('remove a product', () => {
		document.querySelector(`.js-delete-link${productId1}`).click()
		expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1)
		expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null)
		expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null)
		expect(cart.length).toEqual(1)
		expect(cart[0].productId).toEqual(productId2)

		document.quertySelector('.js-cart-container').innerHTML = ''
	})
})