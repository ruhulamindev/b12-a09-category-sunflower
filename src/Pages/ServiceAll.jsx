import React, { useEffect, useState } from "react";
import SkillCard from './../Components/SkillCard';
import { Link } from 'react-router';

const ServiceAll = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
            <div className="text-center mt-8">
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceAll;
