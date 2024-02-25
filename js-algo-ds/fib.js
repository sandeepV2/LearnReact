
// fib in brute force.
function fibonacci(n){
	let fibSeries = [0, 1]

	for (let i=2;i<n;i++){
		fibSeries[i] = fibSeries[i -1] + fibSeries[i -2]
	}

	return fibSeries;
}

function fibRec(n){
	// O(2^n) this is much verse than interative approach.
	if (n < 2){
		return n;
	}
	return fibRec(n-1) + fibRec(n-2)
}

console.log(fibRec(3))

function firstApproach(n){
	let n1 = 0
	let n2 = 1

	let tmp;
	let fibSeries = [n1, n2]
	if (n == 1){
		console.log(fibSeries)
	}
	for (let i=0; i < n ; i++){
		tmp = fibSeries[i] + fibSeries[i+1]
		fibSeries.push(tmp)
	}

	console.log(fibSeries)

}

console.log(fibonacci(5));
