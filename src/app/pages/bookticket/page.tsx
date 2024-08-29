"use client"
import { useState } from 'react';
import React from 'react';

export default function Bookticket() {
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleTicketTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedTicketType(e.target.value);
  };
  
  const handleDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedDate(e.target.value);
  };
  
  const handleTicketCountChange = (e: { target: { value: React.SetStateAction<number>; }; }) => {
    setNumTickets(e.target.value);
  };
  const handleBookNow = () => {
    // Implement booking logic here
    console.log('Booking:', {
      ticketType: selectedTicketType,
      date: selectedDate,
      numTickets: numTickets,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Book Tickets with Go-Trip</h1>
        <div className="mb-4">
          <label htmlFor="ticket-type" className="block font-medium mb-2 text-gray-700">
            Ticket Type
          </label>
          <select
            id="ticket-type"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedTicketType}
            onChange={handleTicketTypeChange}
          >
            <option value="">Select ticket type</option>
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium mb-2 text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="num-tickets" className="block font-medium mb-2 text-gray-700">
            Number of Tickets
          </label>
          <input
            type="number"
            id="num-tickets"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={numTickets}
            onChange={(e) => handleTicketCountChange}
            min="1"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition-colors duration-300"
          onClick={handleBookNow}
        >
          Book Now
        </button>
        </div>
      <div className="mt-8">
      
      </div>
    </div>
  );
}