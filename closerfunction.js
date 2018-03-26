//closer function inside function
//
//Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

function add(passed) //outer function add 
{
	

	function addinside(inner) //inner function addinside with 'inner' as argument
	{
		
		return passed+inner; //returning the addition of passed and inner argument that is assigned to functions.
	}

	return addinside; //returning the addinside(){ } function
}

var call1=new add(2); //assigning the add function to call1
var call2=new add(3); //assigning the add function to call2

console.log("closer result func1:",call1(4));//calling the inner function by passing the argument value of it.
console.log("closer result func2:",call2(1));//calling the inner function by passing the argument value of it.