"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react';

const SignupPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(+237);

  const handlePhoneNumberchange = (e: { target: { value: any; }; }) => {
    const inputvalue = e.target.value;
    const numericValue = Number(inputvalue)
    setPhoneNumber(numericValue)
  };
  const [password, setPassword] = useState('');
  const [confirmationpassword, setConfirmationPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token);
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occured. Please try again later.');
    }
  };

  return (

    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-3xl text-blue-400 font-bold mb-6"> Welcome To Go-Trip</h1> 
        <h2 className="text-3xl text-gray-600 font-bold mb-6"> Signup</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="first name">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first name"
              type="first name"
              placeholder="Enter your  first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="last name">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last name"
              name="last name"
              type="text"
              placeholder="Enter your  last name"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone number">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone number"
              name="phone number"
              type="int"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberchange}

            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2" >
              Password
            </label>
            <input
              className="shadow apearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder=" Enter your password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmation password">
              Confirmation Password
            </label>
            <input
              className="shadow apearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmation  password"
              name="confirmation password"
              type="password"
              placeholder="Confirm Password"
              value={confirmationpassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              required
            />
          </div>

          <div className="col-span-6">
            <label className="flex gap-4" htmlFor="MarketingAccept">
              <input
                className="size-5 rounded-md border-gray-200 bg-white shadow-md"
                id="MarketingAccept"
                type="checkbox"
                name="MarketingAccept"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline"> privacy policy </a>.
            </p>
          </div>


          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?

              <a href="#" className="text-blue-400 underline">Signin</a>.

            </p>

          </div>
        </form>
      </div>
    </div>
  );
}
export default SignupPage;