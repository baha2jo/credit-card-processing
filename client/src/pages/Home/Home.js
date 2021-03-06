import React from 'react';
import { CardForm } from './components/CardForm';
import { CardsList } from './components/CardsList';
import './Home.scss';

export const Home = () => {
  return (
    <div className='container home h-100 d-flex justify-content-center'>
      <div className='card h-75 w-100 mt-5 mb-5'>
        <div className='card-body p-0 h-100'>
          <div className='row m-0 h-100'>
            <div className='col-md-6 col-sm-12 home__cc-form  '>
              <CardForm />
            </div>
            <div className='col-md-6 col-sm-12 home__cc-list h-100 pb-5'>
              <CardsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
