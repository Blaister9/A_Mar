import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Location from './location';

test('renders the address and map link', () => {
    const mockAddress = "123 Street, City, Country";
    const mockMapLink = "https://maps.google.com/";
    const { getByText } = render(<Location address={mockAddress} mapLink={mockMapLink} theme="light" />);
    
    const addressElement = getByText(mockAddress);
    const mapLinkElement = getByText(/View on Map/i);

    expect(addressElement).toBeInTheDocument();
    expect(mapLinkElement).toBeInTheDocument();
    expect(mapLinkElement.href).toBe(mockMapLink);
});
