import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const rooms = () => {
    // Sample data for available and booked dates
    const availableDates = [
      { title: 'Available', start: '2024-02-20', end: '2024-02-24' },
      { title: 'Available', start: '2024-02-01', end: '2024-02-05' },
    ];
  
    const bookedDates = [
      { title: 'Booked', start: '2024-02-25', end: '2024-02-29' },
      { title: 'Booked', start: '2024-02-06', end: '2024-02-20' },
    ];
  
    return (
      <div className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[...availableDates, ...bookedDates]}
        className="custom-calendar"
      />
      </div>
    );
  };
  
  export default rooms;
  