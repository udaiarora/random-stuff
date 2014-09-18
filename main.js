// 
// Stack and Queues
// 
stack=function() {
	var arr=[];
	this.elements=arr;
	this.push=function(a){
		arr.push(a);
	}
	this.pop=function(){
		return arr.pop();
	}
}

queue= function() {
	var arr=[];
	this.elements=arr;
	this.queue=function(a){
		arr.push(a);
	}
	this.dequeue=function(){
		return arr.shift();
	}
}


/*
s= new stack();
q= new queue();
*/
// s.push(4);
// s.push(2);
// s.push(19);
// console.log(s.pop());
// console.log(s);
// q.queue(5);
// q.queue(8);
// console.log(q.dequeue());




// Trees and tree operations
node = function(val) {
	this.value= val;
	this.left= null;
	this.right= null;
}


binarySearchTree = function(val) {
	this.root= new node(val);
	this.addNode= function(r, v) {
		
		if(v<r.value){
			if(r.left==null)
				r.left=new node(v);
			else
				this.addNode(r.left, v);
		}

		else if(v>r.value) {
			if(r.right==null)
				r.right=new node(v);
			else
				this.addNode(r.right, v);
		} 
	}
}

// n= new node(4);
// console.log(n)

// bst= new binarySearchTree(5);
// bst.addNode(bst.root, 7);
// bst.addNode(bst.root, 9);
// bst.addNode(bst.root, 6);
// bst.addNode(bst.root, 3);
// bst.addNode(bst.root, 1);