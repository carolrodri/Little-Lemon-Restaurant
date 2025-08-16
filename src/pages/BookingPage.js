import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

export const updateTimes = (state, action) => {
    console.log(action);
    return initializeTimes();
};

export const initializeTimes = () => {
     return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div style={{ padding: '4rem 1rem', maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Book a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </div>
    );
}

export default BookingPage;