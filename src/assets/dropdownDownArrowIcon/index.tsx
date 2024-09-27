import React from 'react';

export default function DropdownDownArrowIcon({ inverse = false }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='7'
      viewBox='0 0 13 7'
      fill='none'
      style={{
        transform: inverse ? 'rotate(0deg)' : 'rotate(180deg)',
      }}>
      <path
        d='M6.51733 6.21971L6.51732 6.21971C6.46566 6.23988 6.4108 6.25 6.35593 6.25C6.30106 6.25 6.24621 6.23989 6.19455 6.21971L6.28547 5.98683L6.19454 6.21971C6.14431 6.2001 6.0973 6.17104 6.05688 6.13308L0.886129 1.46943C0.802583 1.39407 0.75 1.28601 0.75 1.16714C0.75 1.04827 0.802583 0.940203 0.886129 0.864851C0.968823 0.790267 1.07594 0.752181 1.18289 0.752181C1.28982 0.752181 1.39691 0.790246 1.47959 0.86479C1.47961 0.86481 1.47964 0.86483 1.47966 0.86485L6.35593 5.25969L11.23 0.866871C11.2704 0.828935 11.3174 0.799892 11.3676 0.780289L11.4585 1.01317L11.3676 0.780288C11.4192 0.760114 11.4741 0.75 11.529 0.75C11.5838 0.75 11.6387 0.760114 11.6904 0.780288L11.5995 1.01313L11.6904 0.780289C11.7397 0.79954 11.7859 0.827894 11.8258 0.864835C11.8666 0.900697 11.9008 0.944778 11.9251 0.995408C11.9506 1.0486 11.9643 1.10714 11.9643 1.16714C11.9643 1.22714 11.9506 1.28568 11.9251 1.33887C11.9003 1.39046 11.8653 1.43524 11.8235 1.47146L6.65498 6.13309C6.61456 6.17105 6.56755 6.2001 6.51733 6.21971Z'
        fill='#0E163B'
        stroke='#7D7C7C'
        strokeWidth='0.5'
      />
    </svg>
  );
}
