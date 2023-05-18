import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragons from '../components/Dragons';

test('render correctly and matches the Dragons snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
