class Queue{
    constructor(){
        this.item = []
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return"Não há nada nessa fila";
        }
        return this.item.shift();
    }
    front(){
        return this.isEmpty() ? "Não há nada nessa fila." : this.item[0];
    }
}

export {Queue};