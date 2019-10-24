import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardItem } from '../CardItem';
import { fetchCards } from 'actions/card.action';
import useAction from 'hooks/useAction';

export const CardsList = () => {
  const [fetchCardsAction] = useAction(fetchCards);
  const cards = useSelector(state => state.cards);

  useEffect(() => {
    fetchCardsAction();
  }, [fetchCardsAction]);

  return (
    <div className='mt-4 h-100 overflow-auto'>
      <h4 className='text-center font-weight-lighter'>Cards List</h4>
      <div className='line'></div>
      <div className='h-100 overflow-auto'>
        {cards.map(item => (
          <CardItem card={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
