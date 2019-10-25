import React from 'react';
import CardIcon from './CardIcon';
import './CardItem.scss';
import { shape, string } from 'prop-types';

export const CardItem = ({ card: { name, cardNumber, limit, expiryDate } }) => {
  return (
    <div className='card-item'>
      <div className='d-flex align-items-center'>
        <span className='card-item__icon mr-4'>
          <CardIcon number={cardNumber} />
        </span>
        <div>
          <p className='mb-0 card-number'>{cardNumber}</p>
          <p className='mb-0 card-holder'>{name}</p>
          <small className='text-muted card-expiry'>{expiryDate}</small>
        </div>
      </div>
      <p className='text-right text-info card-limit'>{limit}$</p>

      <div className='line'></div>
    </div>
  );
};

CardItem.propTypes = {
  card: shape({
    name: string,
    cardNumber: string,
    limit: string,
    expiryDate: string
  }).isRequired
};
