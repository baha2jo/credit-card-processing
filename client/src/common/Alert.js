import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const AlertItem = ({ msg, active, type }) => {
  const [closed, setClosed] = useState(!active);

  const closeAlert = () => {
    setClosed(true);
  };

  return (
    <>
      {!closed && (
        <div className='container pt-2'>
          <div className={`alert alert-${type}`} role='alert'>
            {msg}
            <button
              type='button'
              className='close'
              data-dismiss='alert'
              aria-label='Close'
              onClick={closeAlert}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

AlertItem.propTypes = {
  msg: string.isRequired,
  active: bool.isRequired,
  type: string
};

AlertItem.defaultProps = {
  type: 'danger'
};

const Alert = () => {
  const alert = useSelector(state => state.alert);
  const { messages, alertType } = alert;

  return (
    <>
      {messages.length > 0 &&
        messages.map(({ msg }) => (
          <AlertItem
            key={shortid.generate()}
            msg={msg}
            active={true}
            type={alertType}
          />
        ))}
    </>
  );
};

export default Alert;
