import { StyledBicycleIcon } from '@/components/StyledComponents/styledComponents';
import { SvgIconProps } from '@/types';
import React from 'react';

export default function BicycleIcon({ width = '44', fill }: SvgIconProps) {
  return (
    // <StyledBicycleIcon xmlns='http://www.w3.org/2000/svg' width={width} height='23' viewBox='0 0 44 23' fill='none'>
    //   <path d='M30.5973 2.50977V2.55681L30.6443 2.50977H30.5973Z' fill='#F5F4F4' />
    //   <path
    //     d='M35.0666 6.03797C33.8435 6.03797 32.6675 6.32022 31.6327 6.79062C31.1623 5.23829 30.7859 3.73301 30.5978 2.60405V2.55701C30.5037 2.03956 30.4096 1.6162 30.3626 1.28692H33.2791C33.6083 1.28692 33.8435 1.00468 33.8435 0.72244C33.8435 0.393159 33.5613 0.157959 33.2791 0.157959H29.0455L29.1395 0.816521C29.1395 0.910601 29.2336 1.6162 29.4218 2.60405H17.0502L16.4387 1.33396H19.2611C19.5904 1.33396 19.8256 1.05172 19.8256 0.76948C19.8256 0.440199 19.5433 0.204999 19.2611 0.204999H14.0396C13.7104 0.204999 13.4752 0.48724 13.4752 0.76948C13.4752 1.09876 13.7574 1.33396 14.0396 1.33396H15.1686L15.9683 3.02741L13.0988 7.26102C11.8758 6.55542 10.5116 6.13206 9.00635 6.13206C4.53754 6.03797 0.868408 9.66006 0.868408 14.1289C0.868408 18.5977 4.4905 22.2668 9.00635 22.2668C13.287 22.2668 16.815 18.927 17.0973 14.7404H19.7785C20.0137 15.7282 20.9075 16.4338 21.9894 16.4338C23.2595 16.4338 24.2944 15.399 24.2944 14.1289C24.2944 13.5644 24.1062 13.047 23.7299 12.6236L29.704 3.92117C29.9392 4.95605 30.2215 6.13206 30.6448 7.3551C28.4339 8.81334 26.9757 11.3065 26.9757 14.1289C26.9757 18.5977 30.5978 22.2668 35.1136 22.2668C39.5824 22.2668 43.2516 18.5977 43.2516 14.1289C43.2045 9.66006 39.5354 6.03797 35.0666 6.03797ZM9.00635 21.0908C5.14906 21.0908 2.04441 17.9862 2.04441 14.1289C2.04441 10.2716 5.14906 7.16694 9.00635 7.16694C10.2764 7.16694 11.4054 7.49622 12.4403 8.0607L7.92443 14.6934H15.9213C15.639 18.2684 12.6284 21.0908 9.00635 21.0908ZM10.0883 13.5644L13.3811 8.7663C14.7923 9.94231 15.7801 11.6357 15.9213 13.5644H10.0883ZM19.7785 13.5644H17.0973C16.9561 11.2124 15.7801 9.14262 14.0396 7.77846L16.5328 4.10933L20.4841 12.3884C20.1549 12.7177 19.8726 13.094 19.7785 13.5644ZM21.9894 15.2578C21.5661 15.2578 21.2368 15.0226 21.0486 14.6934C20.9545 14.5052 20.9075 14.317 20.9075 14.1289C20.9075 13.8937 20.9545 13.7055 21.0486 13.5644C21.0486 13.5644 21.0486 13.5644 21.0486 13.5174C21.2368 13.1881 21.6131 12.9999 21.9894 12.9999H22.0365L22.0835 12.9529V12.9999C22.5069 13.047 22.8362 13.2822 22.9773 13.6585C23.0243 13.7996 23.0714 13.9407 23.0714 14.1289C23.1184 14.7404 22.601 15.2578 21.9894 15.2578ZM22.7421 11.965C22.5069 11.871 22.2246 11.8239 21.9894 11.8239C21.8483 11.8239 21.7072 11.8239 21.5661 11.871L17.6147 3.63893H28.4339L22.7421 11.965ZM35.0666 21.0908C31.2093 21.0908 28.1046 17.9862 28.1046 14.1289C28.1046 11.8239 29.2336 9.75415 30.9741 8.48406C31.8208 10.789 32.9968 13.047 34.6432 14.5522C34.7373 14.6463 34.8784 14.6934 35.0195 14.6934C35.1607 14.6934 35.3488 14.6463 35.4429 14.5052C35.6781 14.27 35.6311 13.8937 35.3959 13.7055C33.8435 12.2943 32.7146 10.0834 31.9619 7.87254C32.9027 7.40214 33.9376 7.16694 35.0195 7.16694C38.8768 7.16694 41.9815 10.2716 41.9815 14.1289C42.0285 17.9862 38.9239 21.0908 35.0666 21.0908Z'
    //     fill={fill || '#F5F4F4'}
    //   />
    // </StyledBicycleIcon>
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='13' viewBox='0 0 24 13' fill='none'>
      <path d='M16.5654 1.31036V1.33658L16.5916 1.31036H16.5654Z' fill='#F5F4F4' />
      <path
        d='M19.056 3.27648C18.3745 3.27648 17.7192 3.43375 17.1425 3.69587C16.8804 2.83088 16.6707 1.9921 16.5659 1.36301V1.3368C16.5134 1.04847 16.461 0.812566 16.4348 0.629083H18.0599C18.2434 0.629083 18.3745 0.471812 18.3745 0.314541C18.3745 0.131059 18.2172 0 18.0599 0H15.7009L15.7533 0.366965C15.7533 0.419389 15.8057 0.812566 15.9106 1.36301H9.01686L8.67611 0.655295H10.2488C10.4323 0.655295 10.5634 0.498024 10.5634 0.340753C10.5634 0.157271 10.4061 0.0262119 10.2488 0.0262119H7.33931C7.15582 0.0262119 7.02477 0.183482 7.02477 0.340753C7.02477 0.524236 7.18204 0.655295 7.33931 0.655295H7.96839L8.41399 1.59892L6.81507 3.95798C6.13356 3.56481 5.37342 3.3289 4.53464 3.3289C2.04452 3.27648 0 5.29479 0 7.78491C0 10.275 2.01831 12.3196 4.53464 12.3196C6.91992 12.3196 8.8858 10.4585 9.04307 8.12566H10.5371C10.6682 8.67611 11.1662 9.06929 11.7691 9.06929C12.4768 9.06929 13.0535 8.49263 13.0535 7.78491C13.0535 7.47037 12.9486 7.18204 12.7389 6.94613L16.0678 2.09694C16.1989 2.6736 16.3562 3.3289 16.5921 4.01041C15.3601 4.82297 14.5476 6.2122 14.5476 7.78491C14.5476 10.275 16.5659 12.3196 19.0822 12.3196C21.5723 12.3196 23.6168 10.275 23.6168 7.78491C23.5906 5.29479 21.5461 3.27648 19.056 3.27648ZM4.53464 11.6643C2.38527 11.6643 0.655295 9.93428 0.655295 7.78491C0.655295 5.63554 2.38527 3.90556 4.53464 3.90556C5.24236 3.90556 5.87145 4.08904 6.44811 4.40358L3.93177 8.09945H8.38778C8.23051 10.0915 6.55295 11.6643 4.53464 11.6643ZM5.13752 7.47037L6.97234 4.79676C7.7587 5.45206 8.30914 6.39568 8.38778 7.47037H5.13752ZM10.5371 7.47037H9.04307C8.96444 6.15977 8.30914 5.00646 7.33931 4.24631L8.72853 2.20179L10.9303 6.81507C10.7468 6.99855 10.5896 7.20825 10.5371 7.47037ZM11.7691 8.41399C11.5332 8.41399 11.3497 8.28293 11.2449 8.09945C11.1924 7.9946 11.1662 7.88975 11.1662 7.78491C11.1662 7.65385 11.1924 7.549 11.2449 7.47037C11.2449 7.47037 11.2449 7.47037 11.2449 7.44415C11.3497 7.26067 11.5594 7.15582 11.7691 7.15582H11.7953L11.8215 7.12961V7.15582C12.0574 7.18204 12.2409 7.31309 12.3196 7.52279C12.3458 7.60142 12.372 7.68006 12.372 7.78491C12.3982 8.12566 12.1099 8.41399 11.7691 8.41399ZM12.1885 6.57916C12.0574 6.52674 11.9002 6.50053 11.7691 6.50053C11.6905 6.50053 11.6118 6.50053 11.5332 6.52674L9.3314 1.93967H15.3601L12.1885 6.57916ZM19.056 11.6643C16.9066 11.6643 15.1766 9.93428 15.1766 7.78491C15.1766 6.50053 15.8057 5.34721 16.7756 4.63949C17.2474 5.92387 17.9027 7.18204 18.8201 8.02081C18.8725 8.07324 18.9511 8.09945 19.0298 8.09945C19.1084 8.09945 19.2133 8.07324 19.2657 7.9946C19.3967 7.86354 19.3705 7.65385 19.2395 7.549C18.3745 6.76265 17.7454 5.53069 17.326 4.29874C17.8502 4.03662 18.4269 3.90556 19.0298 3.90556C21.1791 3.90556 22.9091 5.63554 22.9091 7.78491C22.9353 9.93428 21.2054 11.6643 19.056 11.6643Z'
        fill={fill || '#F5F4F4'}
      />
    </svg>
  );
}
