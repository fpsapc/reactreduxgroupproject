import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../components/Navbar';

afterEach(() => {
  cleanup();
});

describe('Display Navbar', () => {
  it('Nabar renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
