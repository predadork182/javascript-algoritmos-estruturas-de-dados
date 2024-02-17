function ListaDuplamenteLigada() {

    var Node = function(element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.append = function(element) {
        //adiciona um elemento no final da list
        var node = new Node(element), 
        current
       
        if (head === null) {
            head = node
        } else {
            current = head
            
            while(current.next) {
                current = current.next
            }

            current.next = node 
        }

        length++
    }

    this.insert = function(position, element) {
       
    }

    this.removeAt = function(position) {
      
    }

    this.remove = function(element) {
        //remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) { // José
        //retorna a posição do elemento
        var current = head, // node (José)
        index = 0 // 3
        
        while(current) { // true 
            if (element === current.element){
                return  index// 3
            } 
            index++
            current = current.next // José
        }
        return -1

    }

    this.isEmpty = function() {
        //retorna se está vazia ou não
        return length === 0 
    }

    this.size = function() {
        //retorna o tamanho da instancia
        return length
    }

    this.getHead = function() {
        // retorna node
        return head
    }

    this.toString = function() {
        var current = head
        var string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        //imprime no console
        console.log(this.toString())
    }
}

var ll = new ListaDuplamenteLigada()