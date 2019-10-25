import { Home } from '../Home';

describe('Home Page', () => {
  it('should render correctly', () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
