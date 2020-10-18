const assert = require('assert')

const greet = ((peopleName, greeting = 'Hi') => `${greeting} ${peopleName}`)

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")