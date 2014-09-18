
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


