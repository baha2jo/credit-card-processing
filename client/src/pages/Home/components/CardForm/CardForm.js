import React from 'react';
import { ReactComponent as Logo } from 'assets/svgs/credit-card.svg';

export function CardForm() {
  return (
    <div className='h-100 d-flex flex-column pb-4'>
      <div className='h-25 mb-5'>
        <span>
          <Logo />
        </span>
      </div>
      <form className='d-flex flex-column flex-grow-1 mt-5'>
        <div className='flex-grow-1'>
          <div className='form-group'>
            <label for='card-number' className='text-light mb-1'>
              Card Number
            </label>
            <input type='email' className='input-field' id='card-number' />
          </div>
          <div class='row'>
            <div className='form-group col'>
              <label for='card-number' className='text-light mb-1'>
                Expiry Date
              </label>
              <input type='email' className='input-field' id='card-number' />
            </div>
            <div className='form-group col'>
              <label for='card-number' className='text-light mb-1'>
                Limit
              </label>
              <input type='email' className='input-field' id='card-number' />
            </div>
          </div>
          <div className='form-group'>
            <label for='card-number' className='text-light mb-1'>
              Card Holder
            </label>
            <input type='email' className='input-field' id='card-number' />
          </div>
        </div>

        <button type='button' class='btn btn-success btn-block'>
          Add New Card
        </button>
      </form>
    </div>
  );
}
