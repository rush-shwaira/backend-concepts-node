// src/utils/findPrimes.ts
export function findPrimes(limit: number): number[] {
  console.log("In prime", limit);
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
