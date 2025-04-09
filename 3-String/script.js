// 1. 'hello'
// 2. "hello"
// 3. `hello` = template string

alert('hello world') // hello world

'some' + 'text' // sometext

'some' + 'more' + 'text' // somemoretext

// typeOf 2 // number

// typeOf 'hello' // string

'hello' + 2 // hello2

'$' + 20.92 // $20.92

'$' + (20.92 + 7.99) // $28.9399999999998

'$' + (20.92 + 7.99) / 100 // $28.93

'items (' + (1 + 1) + '): $' + (2092 + 799) / 100 // items (2): $28.94

alert('items (' + (1 + 1) + '): $' + (2092 + 799) / 100) // hello world

// 1. letter = (a, b, c, d, e)
// 2. number = (1, 2, 3, 4, 5)
// 3. symbol = ($, %, &, #, @)
// 4. escape character = (\n, \t, \r, \b, \f)
// 'I\'m learning JS' // I'm learning JS

alert('some \n text') //


