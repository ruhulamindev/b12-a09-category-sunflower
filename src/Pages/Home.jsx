import React, { useEffect, useState } from "react";
import HeroSwiper from "../Components/HeroSwiper";
import { Link } from "react-router";
import SkillCard from "../Components/SkillCard";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setSkills(topRated);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSwiper />
      <h2 className="text-3xl font-bold text-center mb-6">Popular Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/services">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
