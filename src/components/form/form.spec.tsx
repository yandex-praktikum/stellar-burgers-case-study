import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from './index';

describe('Form component', () => {
  it('Form snapshot', () => {
    const { asFragment } = render(<Form setMode={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders form and handles submit', async () => {
    const user = userEvent.setup();
    const setModeMock = jest.fn();

    render(<Form setMode={setModeMock} />);

    const formElement = screen.getByTestId('form');
    expect(formElement).toBeTruthy();

    await user.type(screen.getByTestId(/name-input/i), 'John Doe');
    await user.type(screen.getByTestId(/email-input/i), 'test@example.com');
    await user.type(screen.getByTestId('password-input'), 'password');
    await user.type(screen.getByTestId(/repeat-password-input/i), 'password');

    fireEvent.submit(formElement);

    expect(setModeMock).toHaveBeenCalledWith('complete');
  });
});
