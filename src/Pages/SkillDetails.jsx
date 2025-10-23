import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.skillId === parseInt(id));
        setSkill(selected);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!skill) return <p className="text-center mt-10">Loading...</p>;
  return (
    <div className="container mx-auto py-8 lg:px-0 px-4">
      <img
        src={skill.image}
        alt={skill.skillName}
  className="rounded-xl h-auto object-cover mb-6 mx-auto md:mx-0"
      />
      <h2 className="text-3xl font-bold">{skill.skillName}</h2>
      <p className="text-gray-700 mt-2">{skill.description}</p>
      <p className="mt-4">
        Provider: {skill.providerName} ({skill.providerEmail})
      </p>
      <p>Price: ${skill.price}</p>
      <p>Rating: ⭐ {skill.rating}</p>
      <p>Slots Available: {skill.slotsAvailable}</p>
      <p>Category: {skill.category}</p>

      <form onSubmit={handleSubmit} className="mt-6 border p-4 rounded">
        <h3 className="text-xl font-semibold mb-3">Book Session</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="border w-full mb-2 p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border w-full mb-2 p-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
      <div className="text-center mt-6 flex gap-3 justify-center items-center">
        <Link to="/services">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Back to All Skills
          </button>
        </Link>
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SkillDetails;
