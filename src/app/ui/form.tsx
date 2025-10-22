'use client';
import { useState } from 'react';

interface FormProps {
  id?: string;
}

export default function Form({ id }: FormProps) {
  const [name, setName] = useState('');
  const [membership, setMembership] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({
          name,
          membership,
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json(); // If you expect a JSON response
      console.log('Response data:', data);

      // Handle successful submission (e.g., show a success message)
    } catch (err) {
      console.error('Error submitting form:', err);
      // Handle error (e.g., show an error message)
    }

    console.log('Data', name, membership, email);
  };

  return (
    <section id={id} className="mb-0 py-20 bg-base-200 lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="col-start-2 col-end-12 flex items-center justify-center flex-col lg:flex-row-reverse gap-6">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Join Us!</h1>
          <p className="pb-6 max-w-md">
            If you would you like to be a part of our team&apos;s protection efforts or if you&apos;d just like to be added to our distribution list sign up now!
          </p>
        </div>

        <form onSubmit={onSubmit} id="join-form">
          <fieldset
            form="join-form"
            className="fieldset w-full bg-base-100 border border-base-300 p-4 rounded-box"
          >
            <legend className="hidden">Join our Mailing List</legend>

            <label className="fieldset-label text-base-content" htmlFor="name-input">
              Name
            </label>
            <input
              id="name-input"
              type="text"
              className="input border-base-300"
              placeholder=""
              form="join-form"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="fieldset-label text-base-content" htmlFor="member-input">
              Choose a Member Level
            </label>
            <select
              id="member-input"
              className="select validator border-base-300"
              required
              form="join-form"
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
            >
              <option disabled value="" className="">
                Membership Level
              </option>
              <option value="Mailing List" className="value:text-base-content">
                Mailing List
              </option>
              <option value="Active Member">Active Member</option>
            </select>
            <div className="validator-hint hidden">Required</div>

            <p className="fieldset-label pb-0 text-base-content">Email</p>
            <div className="join w-full">
              <div>
                <label className="input validator join-item" htmlFor="email-input">
                  <svg
                    className="h-[1em] opacity-50 text-base-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    form="join-form"
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="mail@site.com"
                    className="placeholder:text-base-300"
                    required
                  />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
              </div>
              <button type="submit" className="border-0 btn btn-neutral join-item">
                Join
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}