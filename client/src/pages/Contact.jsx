import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-white py-20 px-6 mt-16">
      <h1 className="text-3xl md:text-5xl font-bold text-[#2d3748] mb-6 text-center">Contact Us</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-[#0077b6] mb-6 text-center">We'd Love to Hear From You</h2>

      {/* Form Container */}
      <div className="form-container max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label htmlFor="name" className="text-lg text-gray-800 mb-2 block">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg text-gray-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="email" className="text-lg text-gray-800 mb-2 block">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg text-gray-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message" className="text-lg text-gray-800 mb-2 block">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 h-48 border border-gray-300 rounded-lg text-lg text-gray-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-orange-400 text-white text-lg rounded-full transition-colors duration-300 ease-in-out hover:bg-orange-500 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
