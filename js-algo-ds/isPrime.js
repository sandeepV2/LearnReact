function isPrime(n){
    if (n < 2) {
        return false;
    }
    // note it cannot be i <= n
    for(i=2; i < n; i++){
        if (n%i == 0){
            return false;
        }
    }
    O(n)
    // optimization the factor of n is less than 
    // sqrt of n.
    for (i=2; i < Math.sqrt(n); i++){
        if (n%i == 0){
            return false;
        }
    }
    // O(sqrt(n))
    return true;
}

console.log(isPrime(5));
console.log(isPrime(1));
console.log(isPrime(6));
console.log(isPrime(13));