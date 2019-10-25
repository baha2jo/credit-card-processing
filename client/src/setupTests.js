import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

// React
global.React = React;

// Enzymes
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.mockStore = configureStore([thunk]);

// Redux + Theme
global.mockRender = (store, component) =>
  mount(<Provider store={store}>{component}</Provider>);

global.fetch = require('jest-fetch-mock');
