import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
    <div className="min-h-screen bg-gray-50">
      {/* hero */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-20 rounded"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          About SkillSwap
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-lg md:text-xl max-w-3xl"
        >
          SkillSwap is a local skill exchange platform where people can learn, share, and grow their talents. Our mission is to connect individuals and foster a community of continuous learning.
        </motion.p>
      </section>

      {/* mission */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10 bg-white">
        {/* mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 bg-gradient-to-tr from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p>
            To empower local talents by providing a platform to learn, share, and collaborate on new skills.
          </p>
        </motion.div>

        {/* vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-1/3 bg-gradient-to-tr from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p>
            To create a thriving community where skill-sharing breaks barriers and opens opportunities for everyone.
          </p>
        </motion.div>

        {/* values */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 bg-gradient-to-tr from-pink-500 to-red-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Values</h2>
          <p>
            Community, Collaboration, Growth, Integrity, and Lifelong Learning.
          </p>
        </motion.div>
      </section>
    </div>
    );
};

export default AboutPage;