class Queue {
  constructor() {
    this.item = {};
    this.head = 0;
    this.tail = 0;
  }

  enque = (value) => {
    this.item[this.tail] = value;

    this.tail++;

    console.log(this.item);
  };

  deque = () => {
    if (this.head === this.tail) {
      console.log("queue is empty");

      return;
    }

    const value = this.item[this.head];

    delete this.item[this.head];

    this.head++;

    console.log(this.item);
  };
}

const queue = new Queue();

queue.enque(1);
queue.enque(2);
queue.deque();
queue.deque();
queue.enque(3);
queue.enque(4);
queue.deque();
queue.enque(5);
queue.deque();
queue.enque(6);
queue.deque();
queue.deque();
queue.deque();
