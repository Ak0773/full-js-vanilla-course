import { formatCurrency } from '../../script-js/utils/money.js'

describe('test suote: formatCurrency', () => {
	it('converts cents into dollors', () => {
		expect(formatCurrency(2095)).toEqual('20,95')
	})

	it('works with 0 ', () => {
		expect(formatCurrency(0).toEqual('0,00'))
	})
	it('rounds up to the nearest cent', () => {
		expect(formatCurrency(2000.5).toEqual('20.01'))
	})
})
