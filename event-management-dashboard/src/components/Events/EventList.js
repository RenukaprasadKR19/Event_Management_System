import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await API.get('/events'); // Backend endpoint
                setEvents(response.data); // Assuming the backend sends event data as JSON
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>{event.name}</li> // Replace `name` with your event field
                ))}
            </ul>
        </div>
    );
};

export default EventList;
