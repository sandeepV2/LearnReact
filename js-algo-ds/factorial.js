function factorial(n){
    let fact = 1;
    // the i could begin with 2 as anything
    // multipled by 1 is 1.
    for(let i=2;i<=n;i++){
        fact *= i
    }
    return fact;
}

function factRec(n) {
    // O(n)
    if (n < 2){
        return 1
    }
    return n * factRec (n -1);
}

// O(n)
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

console.log(factRec(0));
console.log(factRec(1));
console.log(factRec(5));