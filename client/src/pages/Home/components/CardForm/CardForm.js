import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from 'assets/svgs/credit-card.svg';
import useForm from 'react-hook-form';
import useAction from 'hooks/useAction';
import { addCard } from 'actions/card.action';
import './CardForm.scss';

export const CardForm = () => {
  const { register, handleSubmit, errors, reset } = useForm(); // initialise the hook
  const [addCardAction] = useAction(addCard);
  const cards = useSelector(state => state.cards);

  // reset the form if new items added
  useEffect(() => {
    reset();
  }, [cards.length, reset]);

  const onSubmit = data => {
    addCardAction([data]);
  };

  return (
    <div className='h-100 d-flex flex-column pb-4'>
      <div className='h-25 mb-5 text-center'>
        <span className='logo'>
          <Logo />
        </span>
      </div>
      <form
        className='d-flex flex-column flex-grow-1 mt-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex-grow-1'>
          <div className='form-group'>
            <label htmlFor='card-number' className='text-light mb-1'>
              Card Number
            </label>
            <input
              type='number'
              className='input-field'
              id='card-number'
              name='cardNumber'
              ref={register({
                required: 'Please enter a card number',
                maxlength: 19
              })}
            />
            {errors.cardNumber && (
              <small className='text-warning d-inline-block mb-1'>
                {errors.cardNumber.message}
              </small>
            )}
          </div>
          <div className='row'>
            <div className='form-group col'>
              <label htmlFor='expiry-date' className='text-light mb-1'>
                Expiry Date (MM/YY)
              </label>
              <input
                type='text'
                className='input-field'
                id='expiry-date'
                name='expiryDate'
                ref={register({ required: true, pattern: /^\d{2}\/\d{2}$/ })}
              />
              {errors.expiryDate && errors.expiryDate.type === 'required' && (
                <small className='text-warning d-inline-block mb-1'>
                  Please enter expiry date
                </small>
              )}
              {errors.expiryDate && errors.expiryDate.type === 'pattern' && (
                <small className='text-warning d-inline-block mb-1'>
                  Invalid expiry date
                </small>
              )}
            </div>
            <div className='form-group col'>
              <label htmlFor='limit' className='text-light mb-1'>
                Limit
              </label>
              <input
                type='number'
                className='input-field'
                id='limit'
                name='limit'
                ref={register({
                  required: 'Please enter card limit'
                })}
              />
              {errors.limit && (
                <small className='text-warning d-inline-block mb-1'>
                  {errors.limit.message}
                </small>
              )}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='card-holder' className='text-light mb-1'>
              Card Holder
            </label>
            <input
              type='text'
              className='input-field'
              id='card-holder'
              name='name'
              ref={register({
                required: 'Please enter a card holder'
              })}
            />
            {errors.name && (
              <small className='text-warning d-inline-block mb-1'>
                {errors.name.message}
              </small>
            )}
          </div>
        </div>

        <button type='submit' className='btn btn-success btn-block'>
          Add New Card
        </button>
      </form>
    </div>
  );
};
