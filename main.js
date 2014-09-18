
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


s= new stack();
q= new queue();

// s.push(4);
// s.push(2);
// s.push(19);
// console.log(s.pop());
// console.log(s);
// q.queue(5);
// q.queue(8);
// console.log(q.dequeue());