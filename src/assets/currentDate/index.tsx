import { SvgIconProps } from '@/types';
import React from 'react';

export default function CurrentDateIcon({ fill }: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 34 34' fill='none'>
      <path
        d='M17.1085 0.302235H17.1179L17.1273 0.301531C22.3298 -0.0897354 26.4778 1.77681 29.329 4.88454C32.1846 7.99705 33.75 12.3672 33.75 16.9903C33.75 19.9787 32.895 22.0865 31.6004 23.8191C30.428 25.388 28.8949 26.6519 27.2729 27.9891C27.0908 28.1392 26.9076 28.2902 26.7236 28.4427C26.1981 28.8784 25.7217 29.2933 25.2709 29.6859C24.3148 30.5187 23.4738 31.2511 22.5238 31.8682C21.1451 32.7638 19.5478 33.4046 17.0808 33.6799C14.6379 33.9524 12.9237 33.4092 11.391 32.4277C10.2851 31.7196 9.28225 30.7917 8.16494 29.7579C7.70923 29.3362 7.23449 28.897 6.72596 28.4478C4.73437 26.6888 2.88127 24.8555 1.67054 22.9455C0.462343 21.0395 -0.0907314 19.0827 0.469419 17.0569C1.11929 14.7066 2.992 10.5024 5.85988 6.8903C8.73136 3.27364 12.5578 0.302235 17.1085 0.302235Z'
        stroke={fill || '#F5F4F4'}
        strokeWidth='1'
      />
    </svg>
  );
}
