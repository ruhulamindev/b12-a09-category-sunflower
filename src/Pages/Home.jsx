import React, { useEffect, useState } from "react";
import HeroSwiper from "../Components/HeroSwiper";
import { Link } from "react-router";
import SkillCard from "../Components/SkillCard";
import AboutPage from "../Components/AboutPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <HeroSwiper />
      <h2 className="text-3xl font-bold text-center mb-6 mt-8">
        Popular Skills
      </h2>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.skillId} variants={cardVariants}>
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8 mb-8">
        <Link to="/services">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Show All
          </button>
        </Link>
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />
      <AboutPage />
    </div>
  );
};

export default Home;
