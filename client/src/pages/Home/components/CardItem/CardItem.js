import React from 'react';
import CardIcon from './CardIcon';
import './CardItem.scss';

export const CardItem = ({ card: { name, cardNumber, limit, expiryDate } }) => {
  return (
    <div className='card-item'>
      <div className='d-flex align-items-center'>
        <span className='card-item__icon mr-4'>
          <CardIcon number={cardNumber} />
        </span>
        <div>
          <p className='mb-0'>{cardNumber}</p>
          <p className='mb-0'>{name}</p>
          <small className='text-muted'>{expiryDate}</small>
        </div>
      </div>
      <p className='text-right text-info'>{limit}$</p>

      <div className='line'></div>
    </div>
  );
};
