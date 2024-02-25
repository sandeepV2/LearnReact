
function firstApproach(n){
    while (n > 1) {
        if ( n%2 == 0) {
            n = n/2;
        } else {
            return false
        }
    }
    return (n==1) ? true : false
}

function isPowerOfTwo(n){
    if (n < 0) {
        return false
    }

    while (n > 1 ){
        if (n % 2 !== 0){
            return false
        }
        n = n/2;
    }
    return true;

    // O(logn)
}

function isPowerOfTwoBitWise(n) {
    if (n < 0) {
        return false
    }

    return (n & n - 1) === 0;
    // O (1)
}



console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(6));


console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(6));