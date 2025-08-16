import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes.length > 0 ? availableTimes[0] : '');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

     const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Confirmed reservation for ${guests} person on ${date} at ${time} to celebrate ${occasion}.`);
        setDate("");
        setTime(availableTimes.length > 0 ? availableTimes[0] : '');
        setGuests(1);
        setOccasion("Birthday");
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;