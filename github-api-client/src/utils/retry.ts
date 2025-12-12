// src/utils/retry.ts
export async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delayMs = 500
) {
  try {
    return await fn();
  } catch (err: any) {
    if (retries === 0) throw err;
    const nextDelay = delayMs * 2; // Exponential backoff
    console.log(
      `Retrying... attempts left: ${retries}, next delay: ${nextDelay}ms`
    );
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return retry(fn, retries - 1, nextDelay);
  }
}
