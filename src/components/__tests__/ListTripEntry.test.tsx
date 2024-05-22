import React from 'react';
import { render, screen } from '@testing-library/react';
import {ListTripEntry} from "../ListTripEntry";

const entry = {
    id: 1,
    name: "Test Name",
    description: "Test Description",
    date: "Test",
    image: "Test",
    tripId: 1
}

test('renders heading', () => {
    render(
        <ListTripEntry
            image={entry.image}
            name={entry.name}
            description={entry.description}
            id={entry.id.toString()}
            handleOpenModal={() => {}}
        />
    );
    const headingElement = screen.getByText(entry.name);
    expect(headingElement).toBeInTheDocument();
});
