import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function FindSkills() {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      const q = query(
        collection(db, 'skills'),
        where('type', '==', 'offer')
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSkills(data);
    };

    fetchSkills();
  }, []);

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Find Skills</h1>
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="p-2 border rounded mb-4 w-full max-w-md"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <p className="text-gray-600">By: {skill.userName}</p>
            <p className="text-gray-500">Location: {skill.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
