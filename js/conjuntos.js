function Set() {

    var items = {}

    this.add = function(value) {
        // adiciona um novo item no conjunto
        if (!this.has(value)) {
            items[value] = value 
            return true
        }
        return false
    }

    this.delete = function(value) {
        // remove um valor do conjunto
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value) {
        // devolve se um valor existe ou não
        return items.hasOwnProperty(value);
    }

    this.clear = function() {
        // remove todos os itens do conjunto
        items = {}
    }

    this.size = function() {
        // retorna o tamanho do conjunto
        return Object.keys(items).length
    }

    this.values = function() {
        // retorna um array com todos os valores do conjunto
        var values = [],
        keys = Object.keys(items)
        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function(otherSet) {
        var unionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new Set(), // [2,3]
        values = this.values() //[1,2,3]

        for (var i = 0; i < values.length; i++) { // 0 , 1, 2
            if (otherSet.has(values[i])) { // true
                intersectionSet.add(values[i]) 
            }
        }
        return intersectionSet
    }

    this.difference = function(otherSet) { // [2,3,4]
        var differenceSet = new Set(), // [1]
        values = this.values() // [1,2,3]

        for (var i = 0; i < values.length; i++) { // 0,1,2
            if (!otherSet.has(values[i])) { // false
                differenceSet.add(values[i])
            }
        }

        return differenceSet // [1]
    }

    this.subset = function(otherSet) {

        if (this.size() > otherSet.size()) {
            return false
        } else {
            var values = this.values()

            for (var i = 0; i < values.length; i++) { // 0, 1
                if (!otherSet.has(values[i])) { // true
                    return false
                }
            }
            return true
        }
    }

}

// var set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(4)
// set.add(4)
// set.delete(4)

// console.log(set.values())
// set.clear()
// console.log(set.values())
// console.log(set.size())
// console.log(set.has(1))
// console.log(set.has(10))

// var setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// var setB = new Set()
// setB.add(3)
// setB.add(4)
// setB.add(5)
// setB.add(6)

// var unionAB = setA.union(setB)
// console.log(unionAB.values())

// var setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// var setB = new Set()
// setB.add(2)
// setB.add(3)
// setB.add(4)


// var intersectionAB = setA.intersection(setB)
// console.log(intersectionAB.values())

    var setA = new Set()
    setA.add(1)
    setA.add(2)

    var setB = new Set()
    setB.add(1)
    setB.add(2)
    setB.add(3)
    
    var setC = new Set()
    setC.add(2)
    setC.add(3)
    setC.add(4)


// var intersectionAB = setA.intersection(setB)
// console.log(intersectionAB.values())

console.log(setA.subset(setB))
console.log(setA.subset(setC))