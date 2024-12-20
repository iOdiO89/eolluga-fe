import fetchWithFallback from "./fetchWithFallback";

const delay = (ms: number) =>
  new Promise<void>(resolve => {
    setTimeout(() => resolve(), ms);
  });

const fetchWithThrottle = async (
  url: string,
  cache: RequestCache,
  retries: number = 3,
  delayMs: number = 1000,
): Promise<Response> => {
  try {
    const response = await fetchWithFallback(url, cache);
    return response;
  } catch (error) {
    if (retries > 1) {
      // eslint-disable-next-line no-console
      console.warn(
        `${url} 패치를 재시도하고 있습니다. (${retries - 1}회 남음)`,
      );
      await delay(delayMs);
      return fetchWithThrottle(url, cache, retries - 1, delayMs);
    }
    throw new Error(`${url} fetch에 실패했습니다.`);
  }
};

export default fetchWithThrottle;
