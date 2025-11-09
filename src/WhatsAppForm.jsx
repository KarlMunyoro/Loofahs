import React, { useState } from "react";

const WhatsAppForm = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number (use international format without "+")
    const businessNumber = "254733600085"; // replace with your actual number

    const message = `Hello! My name is ${form.name}. 
Here are my details:
📞 Phone: ${form.number}
📧 Email: ${form.email}`;

    // Create the WhatsApp link
    const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="WhatsAppForm" className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Contact Us via WhatsApp
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="number"
            value={form.number}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="07XXXXXXXX"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
