function isPrime(num, comparator = 2) {
    if (num == 0 || num == 1)
        return false;

    if (num == comparator)
        return true;

    if (num % comparator == 0)
        return false;

    comparator++;
    return isPrime(num, comparator)
}

const primes = []
for (let num = 2; num <= 100_000; num++) {
    if (isPrime(num))
        primes.push(num)
}

console.log(primes)