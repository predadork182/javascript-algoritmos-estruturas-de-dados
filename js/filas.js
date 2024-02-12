function Queue(){
    var items = []

    this.enqueue = function(element){
        // adiciono um novo item
        items.push(element);
    }

    this.dequeue = function(){
        // remove um item e retorna
        return items.shift()
    }

    this.front = function(){
        // retorna o primeiro elemento da fila
    }

    this.isEmpty = function(){
        // verifica se a fila está vazia
    }

    this.size = function(){
        // retorna o tamanho da fila
    }

    this.print = function(){
        // imprime a fila no console
    }
}