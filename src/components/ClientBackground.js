'use client';

import dynamic from 'next/dynamic';

const ConstellationBackground = dynamic(
  () => import('./ConstellationBackground'),
  { ssr: false }
);

export default function ClientBackground() {
  return <ConstellationBackground />;
}
