import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu';

const mockItems = [
    { id: 1, category: 'Starters', name: 'Soup', price: 5 },
    { id: 2, category: 'Main Course', name: 'Steak', price: 15 }
];

test('renders menu items', () => {
    const { getByText } = render(<Menu items={mockItems} theme="light" />);
    const starterElement = getByText(/Soup/i);
    const mainCourseElement = getByText(/Steak/i);
    expect(starterElement).toBeInTheDocument();
    expect(mainCourseElement).toBeInTheDocument();
});
