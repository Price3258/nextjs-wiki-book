export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit | undefined,
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    const errorResponse = await res.json();
    const error = new Error(
      errorResponse.message ?? 'API 요청 중에 에러가 발생했습니다.',
    );
    throw error;
  }

  return res.json();
};
