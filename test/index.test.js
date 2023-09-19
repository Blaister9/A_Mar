import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';

test('renders the header and footer', () => {
    const { getByText } = render(<Index theme="light" />);
    const headerElement = getByText(/My Website/i);
    const footerElement = getByText(/©2023 My Website/i);
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});
