class Node {
    constructor(data) {
        this.data = data;   
        this.next = null;   
    }
}
/**
 * 
 */
class LinkedList {

    constructor(){
        this.head = null
        this._size = 0
    }

    /** 
     * Adicionar elementos no final da lista
     */
    append(element) {
        if(this.isEmpty()){
            const node = new Node(element);
            this.head = node;
            this._size++;
        } else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            };
            temp.next = node;
        
        }
        this._size++
        
    }

    insert(position, element) {
        if(position < 0 || positions == this.size){
            return -1;
        };
        if(position == 0 && this.size() === 0){
            this.append(element);
        };
        if(position === 0 && !this.isEmpty()){
            const node = new Node(element);
            node.Next = this.head;
            this.head = node;
            this._size++;
        }
        if(position === this._size){
            this.append(element);
        }
        if(position > 0 && position < this.size()){
            let pos = 0; 
            let temp = this.head;
            while(pos < position -1){
                temp = temp.next;
                pos++;
            };
            const node = new Node(element)
            node.next = temp.next;
            temp.next = node;
            this._size++;
        }

    }

    remove(element) {
        let pos = this.indexOf(element);
        if( pos !== -1){
            this.removeAt(pos, element)
        };
        

    }

    removeAt(position){
        if(position < 0 || positions >= this.size || this.isEmpty()){
            return -1;
        };
        if(position === 0 && !this.isEmpty()){
            this.head = this.head.next
        }
        let temp = this.head;
        let pos = 0;
        while(pos < position - 1){
            temp = temp.next;
            pos++;
        };
        temp.next = temp.next.next;


    }

    isEmpty(){
        return this.size() === 0
    }

    size() {
        return this.__size
    } 

    print() {
        let temp = this.head;
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next;
        };
    }

    clear(){
        this.head = 0;
    }

    indexOf(value){
        let temp = this.head;
        let cont = 0;
        while(temp !== null){
            cont++;
            if(temp.data === value){
                return cont}
        };
        console.log(temp)
    }

    toString(){
        let text = ""
        let temp = this.head;
        while(temp !== null){
            text += temp.data
            temp = temp.next;
        };
    }

    toArray(){
        text = []
        let temp = this.head;
        while(temp !== null){
            text.append(temp.data)
            temp = temp.next;
        };
    }

}
