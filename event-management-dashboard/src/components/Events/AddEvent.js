import React, { useState } from 'react';
import API from '../api/axios';

const AddEvent = () => {
    const [event, setEvent] = useState({
        name: '',
        description: '',
        location: '',
        date: '',
    });

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/events', event);
            console.log('Event added:', response.data);
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Event Name"
                value={event.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={event.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={event.location}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
            />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEvent;
