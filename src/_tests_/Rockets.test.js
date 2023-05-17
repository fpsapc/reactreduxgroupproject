import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

test('render correctly and matches the Rockets snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
