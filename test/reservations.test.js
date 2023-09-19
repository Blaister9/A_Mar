import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Reservations from './reservations';

test('submits the reservation form', () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Reservations onReservationSubmit={mockSubmit} theme="light" />);

    const nameInput = getByLabelText(/Name/i);
    const dateInput = getByLabelText(/Date/i);
    const timeInput = getByLabelText(/Time/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(dateInput, { target: { value: '2023-09-15' } });
    fireEvent.change(timeInput, { target: { value: '19:00' } });

    fireEvent.click(getByText(/Submit/i));

    expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John',
        date: '2023-09-15',
        time: '19:00'
    });
});
