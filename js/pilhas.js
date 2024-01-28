// LIFO (last in firt out)

function Stack(){

    var items = []

    this.push = function(element){
        // adiciona um novo item a pilha
        items.push(element)
    }

    this.pop = function(){
        // remove o item do topo da pilha
        return items.pop()
    }

    this.peek = function(){
        // devolve o elemento que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        // informa se a pilha está vazia ou não
        return items.element === 0
    }

    this.clear = function(){
        // limpa a pilha
        items = []
    }

    this.size = function(){
        // informar o tamanho da pilha
        return items.length
    }

    this.print = function(){
        // imprime a pilha no console
        console.log(items.toString)
    }

}