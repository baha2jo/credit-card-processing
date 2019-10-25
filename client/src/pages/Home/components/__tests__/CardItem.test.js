import { CardItem } from '../CardItem';

const card = {
  cardNumber: '4970856264139166',
  expiryDate: '12/21',
  limit: '122',
  name: '3213',
  _id: '2QCfp3SjZ7bMo1gi'
};

function setup() {
  const component = shallow(<CardItem card={card} />);

  return component;
}

describe('CardItem component', () => {
  const component = setup();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display the correct card number', () => {
    expect(component.find('.card-number').text()).toBe(card.cardNumber);
  });

  it('should display the correct card holder name', () => {
    expect(component.find('.card-holder').text()).toBe(card.name);
  });

  it('should display the correct expiry date', () => {
    expect(component.find('.card-expiry').text()).toBe(card.expiryDate);
  });

  it('should display the correct card limit', () => {
    expect(component.find('.card-limit').text()).toBe(`${card.limit}$`);
  });
});
