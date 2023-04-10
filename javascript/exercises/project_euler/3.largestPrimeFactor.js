/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// const num = 13195;
const num = 600851475143;

function findPrimes() {
    const primes = [];
    for (let i = 2; i < 10000; i++) {
        for (let checkedNum = 2; checkedNum < 10000; checkedNum++) {
            if (i % checkedNum === 0) {
                if (!primes.includes(checkedNum)) primes.push(checkedNum)
                break;
            }
        }
    }
    return primes
}

function primeFactorsOfNum(num, primes) {
    const primeDivisionsOfNum = []
    for (let prime of primes) {
        if (num % prime === 0) {
            primeDivisionsOfNum.push(prime)
        }
    }
    return primeDivisionsOfNum
}

const start = Date.now()
console.log(primeFactorsOfNum(num, findPrimes()))
const end = Date.now()
console.log(end - start, "ms")
