import React from 'react';
type EditIconProps = {
  height?: string;
};
export default function EditIcon({ height }: EditIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='19' height={height || '18'} viewBox='0 0 19 18' fill='none'>
      <path
        d='M0.772188 12.4679L0.00627875 17.4318C-0.0188005 17.5804 0.0313581 17.7531 0.154828 17.8514C0.253219 17.9498 0.376689 18 0.500149 18H0.574424L5.53842 17.2341C5.63681 17.209 5.73616 17.1598 5.81044 17.0855L16.9971 5.8989C18.3553 4.54073 18.3553 2.34346 16.9971 1.00924C15.6389 -0.32384 13.4416 -0.348929 12.1074 1.00924L0.895841 12.1959C0.821566 12.2702 0.772188 12.3695 0.772188 12.4679ZM2.25383 12.246L11.0202 3.47962L14.5265 6.98592L5.76013 15.7523L2.25383 12.246ZM12.7979 1.70091C13.7606 0.738239 15.3417 0.738239 16.3042 1.70091C17.2669 2.66358 17.2669 4.24464 16.3042 5.20721L15.2422 6.26925L11.7369 2.76295L12.7979 1.70091ZM1.68562 13.0602L4.97017 16.3447L1.09346 16.9621L1.68562 13.0602Z'
        fill='#9A9A9A'
      />
    </svg>
  );
}
