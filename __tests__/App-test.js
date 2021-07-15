/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux';
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
// import { render, fireEvent, screen } from './test-utils'
// import AppUnwrapped from '../client/App.js';
import { describe, expect, it } from '@jest/globals';
import store from '../client/store';
import App from '../client/App';

// function renderWithRedux(component, { initialState, store = store } = {}) {
//     return {
//         ...render(<Provider store={store}>{App}</Provider>)
//     };
// }

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('Testing the tests', () => {
  it('Check if create button exists', () => {
    // renderWithRedux(<App />);
    render(<App />, { wrapper: Wrapper });

    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);
    expect(screen.getByLabelText('Favorite?:'));
    expect(screen.getByLabelText('Company Name:'));
    expect(screen.getByLabelText('Job Title:'));
    expect(screen.getByLabelText('Salary:'));
    expect(screen.getByLabelText('Application Status Date:'));
    expect(screen.getByLabelText('Post Source:'));
    expect(screen.getByLabelText('Application Status:'));
    expect(screen.getByLabelText('Description:'));
    expect(screen.getByLabelText('Notes:'));

    // expect(screen.getByText('Create'))
    // expect(true).toEqual(true);
    // .toHaveTextContent('Create');
    // expect(true)
    // fireEvent.click(getByLabelText(/dog/i));
  });
});
