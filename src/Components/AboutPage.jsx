import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const AboutPage = () => {
  const teachers = [
    {
      id: 1,
      name: "Md. Ruhul Amin",
      title: "Junior Web Developer",
      image: "/IMG_20240509_001921.jpg",
      description:
        "I am a Junior Frontend Developer skilled in  HTML5, CSS3, Tailwind CSS,React.js and JavaScript. I build responsive, interactive, and user-friendly web applications. I am passionate about improving user experience and constantly learning new technologies to enhance my skills. I work well in a team and enjoy solving challenging problems.",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=61566534111401",
        github: "https://github.com/ruhulamindev",
        linkedin: "https://www.linkedin.com/in/md-ruhul-amin-a71b58352",
      },
    },
    {
      id: 2,
      name: "Md. Robiul Islam",
      title: "Full Stact Web Developer",
      image: "/Robiul.jpg",
      description:
        "I am a Backend Developer skilled in Node.js, Express.js, MongoDB, and MySQL. I build secure, scalable, and efficient server-side applications. I am passionate about optimizing backend performance, designing robust APIs, and constantly learning new technologies to enhance my skills. I work well in a team and enjoy solving complex problems.",
      social: {
        facebook: "https://www.facebook.com/share/1CnijZjW7k/",
        // github: "https://github.com/jane",
        // linkedin: "https://linkedin.com/in/jane",
      },
    },
    {
      id: 3,
      name: "Md. Labib Bin Mahamud",
      title: "Junior Web Developer",
      image: "/SAVE_20250817_241008-01.jpeg.jpg",
      description:
        "I am a Junior Developer skilled in  HTML5, CSS3 and JavaScript. I build responsive, interactive, and user-friendly web applications. I am passionate about improving user experience and constantly learning new technologies to enhance my skills.",
      social: {
        facebook: "https://www.facebook.com/share/1JC5yG8Rmy/",
        // github: "https://github.com/mike",
        // linkedin: "https://linkedin.com/in/mike",
      },
    },
  ];
  return (
    <div className="min-h-md bg-gray-50">
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
          SkillSwap is a local skill exchange platform where people can learn,
          share, and grow their talents. Our mission is to connect individuals
          and foster a community of continuous learning.
        </motion.p>
      </section>

      {/* mission */}
      <section className="py-20 px-6 md:px-10 flex flex-col md:flex-row gap-10 bg-white">
        {/* mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 bg-gradient-to-tr from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p>
            To empower local talents by providing a platform to learn, share,
            and collaborate on new skills.
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
            To create a thriving community where skill-sharing breaks barriers
            and opens opportunities for everyone.
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

      {/* popular teacher */}
      <section className="py-15 px-6 md:px-10 bg-gray-100 border mb-6 border-gray-300 rounded">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Trainer
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-green-500"
              />
              <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{teacher.title}</p>
              <p className="text-gray-700 text-sm mb-4 text-left">
                {teacher.description}
              </p>

              {/* social links */}
              <div className="flex gap-3 mb-4">
                {teacher.social?.facebook && (
                  <a
                    href={teacher.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-white rounded-full border p-2 hover:bg-green-500"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                )}
                {teacher.social?.github && (
                  <a
                    href={teacher.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-white rounded-full border p-2 hover:bg-green-500"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
                {teacher.social?.linkedin && (
                  <a
                    href={teacher.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-white rounded-full border p-2 hover:bg-green-500"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* join us */}
      <section className="rounded py-16 text-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join the SkillSwap Community
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Start learning and sharing your skills
          <br /> with people around you today.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
