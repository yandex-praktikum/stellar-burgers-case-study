import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Form } from './index';

describe('Form component', () => {
  it('Form snapshot', () => {
    const component = renderer.create(<Form setMode={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders form and handles submit', () => {
    const setModeMock = jest.fn();

    render(<Form setMode={setModeMock} />);

    const formElement = screen.getByTestId('form');
    expect(formElement).toBeTruthy();

    userEvent.type(screen.getByTestId(/name-input/i), 'John Doe');
    userEvent.type(screen.getByTestId(/email-input/i), 'test@example.com');
    userEvent.type(screen.getByTestId('password-input'), 'password');
    userEvent.type(screen.getByTestId(/repeat-password-input/i), 'password');

    fireEvent.submit(formElement);

    expect(setModeMock).toHaveBeenCalledWith('complete');
  });
});
