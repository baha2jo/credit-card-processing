import React from 'react';
import { CardForm } from './components/CardForm';
import { CardsList } from './components/CardsList';
import './Home.scss';

export const Home = () => {
  return (
    <div className='container home h-100 d-flex justify-content-center align-items-center'>
      <div className='card h-75 w-100'>
        <div className='card-body p-0 h-100'>
          <div className='row m-0 h-100'>
            <div className='col home__cc-form h-100'>
              <CardForm />
            </div>
            <div className='col home__cc-list h-100'>
              <CardsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
