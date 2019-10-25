import { CardsList } from '../CardsList';

function setup() {
  const store = global.mockStore({
    cards: [
      {
        cardNumber: '4970856264139166',
        expiryDate: '12/21',
        limit: '122',
        name: '3213',
        _id: '2QCfp3SjZ7bMo1gi'
      }
    ]
  });

  return { wrapper: global.mockRender(store, <CardsList />) };
}

describe('CardsList component', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
