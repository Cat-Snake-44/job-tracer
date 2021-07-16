/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { fireEvent, screen, render } from '@testing-library/react';
// import { render, fireEvent, screen } from './test-utils'
// import AppUnwrapped from '../client/App.js';
import { describe, expect, test } from '@jest/globals';
import store from '../client/store';
import App from '../client/App';

// eslint-disable-next-line no-unused-vars
const fetch = require('isomorphic-fetch');
// function renderWithRedux(component, { initialState, store = store } = {}) {
//     return {
//         ...render(<Provider store={store}>{App}</Provider>)
//     };
// }

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('Testing the tests', () => {
  test('Check if create button exists', () => {
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
  test('Check if add job button pulls user information', () => {
    render(<App />, { wrapper: Wrapper });
    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);
    const favorite = screen.getByLabelText('Favorite?:');
    fireEvent.change(favorite, { target: { value: true } });
    const companyName = screen.getByLabelText('Company Name:');
    fireEvent.change(companyName, { target: { value: 'Banana' } });
    const jobTitle = screen.getByLabelText('Job Title:');
    fireEvent.change(jobTitle, { target: { value: 'Janitor' } });
    const salary = screen.getByLabelText('Salary:');
    fireEvent.change(salary, { target: { value: 12345 } });
    const appStatusDate = screen.getByLabelText('Application Status Date:');
    fireEvent.change(appStatusDate, { target: { value: '2021-06-19' } });
    const postSource = screen.getByLabelText('Post Source:');
    fireEvent.change(postSource, { target: { value: 'friend' } });
    const appStatus = screen.getByLabelText('Application Status:');
    fireEvent.change(appStatus, { target: { value: 'Pending' } });
    const description = screen.getByLabelText('Description:');
    fireEvent.change(description, { target: { value: 'lalalala' } });
    const notes = screen.getByLabelText('Notes:');
    fireEvent.change(notes, { target: { value: 'hihihihiih' } });

    const addJobButton = screen.getByText('Add Job');
    fireEvent.click(addJobButton);
    // expect(screen.getByLabelText('Application List'));
    // expect(getByTestId("list")).toHaveTextContent('Banana');
    // expect(screen.getByLabelText('Notes:'));
    // expect(screen.getByLabelText('Notes:'));
  });
});
