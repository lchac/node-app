// Objetct property shorthand

const name = 'Andrew'
const user = { name }
console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: 3.3,
    rating: 4.2
}

const { label, stock, undefi, rating = 5, newOne = 0, salePrice: discount } = product

console.log(label, stock, undefi, rating, newOne, discount)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)