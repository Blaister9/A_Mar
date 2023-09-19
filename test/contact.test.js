import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './contact';

test('submits the contact form', () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Contact onMessageSubmit={mockSubmit} theme="light" />);

    const nameInput = getByLabelText(/Name/i);
    const emailInput = getByLabelText(/Email/i);
    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    fireEvent.click(getByText(/Submit/i));

    expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John',
        email: 'john@example.com',
        message: 'Hello!'
    });
});
