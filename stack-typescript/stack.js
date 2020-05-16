var Stack = /** @class */ (function () {
    function Stack() {
        this.head;
    }
    Stack.prototype.insert = function (value) {
        if (this.head) {
            var newNode = new StackNode(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            var newNode = new StackNode(value);
            this.head = newNode;
        }
    };
    Stack.prototype.pop = function () {
        if (this.head) {
            var output = this.head;
            this.head = this.head.next;
            return output.value;
        }
        else {
            console.log("the stack is empty");
        }
    };
    return Stack;
}());
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next;
    }
    return StackNode;
}());
var testTube = new Stack;
testTube.insert(4);
testTube.insert(7);
testTube.insert(8);
console.log(testTube.pop());
console.log(testTube.pop());
console.log(testTube.pop());
