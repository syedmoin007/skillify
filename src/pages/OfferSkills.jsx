import React, { useState } from 'react';
import { auth, provider, db } from '../firebase';

import { collection, addDoc } from 'firebase/firestore';

export default function OfferSkills() {
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert('Please login first.');
      return;
    }

    try {
      await addDoc(collection(db, 'skills'), {
        name: skill,
        location: location,
        userName: auth.currentUser.displayName || 'Anonymous',
        userId: auth.currentUser.uid,
        type: 'offer',
        timestamp: new Date()
      });
      alert('Skill offered successfully!');
      setSkill('');
      setLocation('');
    } catch (error) {
      console.error(error);
      alert('Error adding skill.');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Offer a Skill</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Skill name"
          value={skill}
          onChange={e => setSkill(e.target.value)}
          required
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Your location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Offer Skill
        </button>
      </form>
    </div>
  );
}
