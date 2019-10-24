import React from 'react';
import { string } from 'prop-types';
import { getCardType } from './card.helper';

import { ReactComponent as Visa } from 'assets/svgs/visa.svg';
import { ReactComponent as Master } from 'assets/svgs/master.svg';
import { ReactComponent as Discover } from 'assets/svgs/discover.svg';
import { ReactComponent as Amex } from 'assets/svgs/amex.svg';
import { ReactComponent as DefaultCard } from 'assets/svgs/defaultcard.svg';

const CardIcon = ({ number }) => {
  const cardType = getCardType(number);

  const renderCardIcon = () => {
    switch (cardType) {
      case 'Visa':
        return <Visa />;
      case 'Mastercard':
        return <Master />;
      case 'AMEX':
        return <Amex />;
      case 'Discover':
        return <Discover />;
      default:
        return <DefaultCard />;
    }
  };

  return <>{renderCardIcon()}</>;
};

CardIcon.propTypes = {
  number: string.isRequired
};

export default CardIcon;
