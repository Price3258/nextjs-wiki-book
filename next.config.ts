import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: (() => {
    let comilerConfig = {};
    if (process.env.NODE_ENV === 'production') {
      comilerConfig = {
        // production 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid 속성을 제거합니다.
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }

    comilerConfig = {
      ...comilerConfig,
      styeldComponents: true,
    };

    return comilerConfig;
  })(),
};

export default nextConfig;
