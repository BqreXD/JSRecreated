/**
* Array.prototype.fromEntries() - Also known as Object.fromEntries (Slightly modified to be a prototype method of an array as it looks cleaner tbf)
* Takes in an array of nested arrays, formed of key-value pairs, turning them into an object of key-value pairs.
*/

Array.prototype.fromEntriesRecreated = function() {
    let err = this.some(elem => !Array.isArray(elem) || elem.length !== 2)
    if (err) throw new Error('One of the entered values is not an array of key-value pairs.')

    let final = {}
    this.forEach(elem => final = {...final, [elem[0]]: elem[1]})

    return final
}

/* Example */
const exampleArray = [
  ['key', 'value'],
  ['keyTwo', 'valueTwo']
]

const objectifiedArray = exampleArray.fromEntriesRecreated()
console.log(objectifiedArray) // { key: 'value', keyTwo: 'valueTwo' }
