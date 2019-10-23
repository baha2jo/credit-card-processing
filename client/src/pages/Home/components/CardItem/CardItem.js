import React from 'react';
import { ReactComponent as Visa } from 'assets/svgs/visa.svg';
import './CardItem.scss';

export const CardItem = () => {
  return (
    <div className='card-item'>
      <div className='d-flex align-items-center'>
        <span className='card-item__icon mr-4'>
          <Visa />
        </span>
        <div>
          <p className='mb-0'>4444 5555 6666 4444</p>
          <p className='mb-0'>Bahaa Almomani</p>
          <small class='text-muted'>12/22</small>
        </div>
      </div>
      <p class='text-right text-info'>0$</p>

      <div className='line'></div>
    </div>
  );
};
