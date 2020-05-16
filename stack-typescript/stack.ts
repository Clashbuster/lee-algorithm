class Stack{

    head?: StackNode

    constructor(){
        this.head
    }

    insert(value:any){
        if(this.head){
            let newNode = new StackNode(value)
            newNode.next = this.head
            this.head = newNode
        } else {
            let newNode = new StackNode(value)
            this.head = newNode
        }
    }

    pop(){
        if(this.head){
            let output = this.head
            this.head = this.head.next
            return output.value
        } else {
            console.log("the stack is empty")
        }
    }
}

class StackNode {

 next?:StackNode
 value:any

    constructor(value:any){
        this.value = value
        this.next 
    }
}

let testTube = new Stack


testTube.insert(4)
testTube.insert(7)
testTube.insert(8)

console.log(testTube.pop())
console.log(testTube.pop())
console.log(testTube.pop())

// expected output => 8 7 4
