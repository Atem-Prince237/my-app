"use client"
import React from 'react';
import Image from 'next/image';

export default function PaymentPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">PAYMENT</h1>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block font-medium mb-2">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select payment method</option>
            <option value="mtn">MTN</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <button className="w-full bg-blue-500 text-white font-medium py-4 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Pay now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-500"></div>
    </div>
  );
}