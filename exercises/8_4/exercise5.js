const assert = require('assert')

const myList = [1, 2, 3]

const swap = (([value1, value2, value3] = myList) => [value3, value2, value1]);

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)