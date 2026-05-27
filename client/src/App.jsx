import axios from "axios";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://portfolio-backend-i7e0.onrender.com",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-black z-50">

        <h1 className="text-2xl font-bold text-purple-500">
          Keerthana
        </h1>

        <ul className="flex gap-6 text-gray-300">

  <a href="#home">
    <li className="hover:text-purple-400 cursor-pointer">
      Home
    </li>
  </a>

  <a href="#about">
    <li className="hover:text-purple-400 cursor-pointer">
      About
    </li>
  </a>

  <a href="#skills">
    <li className="hover:text-purple-400 cursor-pointer">
      Skills
    </li>
  </a>

  <a href="#projects">
    <li className="hover:text-purple-400 cursor-pointer">
      Projects
    </li>
  </a>

  <a href="#contact">
    <li className="hover:text-purple-400 cursor-pointer">
      Contact
    </li>
  </a>

</ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-[80vh] flex flex-col justify-center items-center text-center px-4">

        <h2 className="text-6xl font-bold mb-6">
          Hi, I'm <span className="text-purple-500">Keerthana</span>
        </h2>

        <p className="text-gray-400 text-xl max-w-3xl leading-8">
          Computer Science student passionate about Full Stack Development
          and AI-powered applications. Experienced in building scalable
          web platforms using React, REST APIs, PostgreSQL, MongoDB,
          and modern frontend technologies.
        </p>

        <div className="mt-8 flex gap-4">

          

        </div>
        <div className="mt-8 flex gap-4 flex-wrap">

  <a
    href="https://github.com/malleshwaramkeerthana"
    target="_blank"
    className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/keerthana-malleshwaram/"
    target="_blank"
    className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500 transition"
  >
    LinkedIn
  </a>
 
</div>

      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="coding"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>

            <h3 className="text-3xl font-semibold mb-4">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-8">
              I'm a Computer Science student with strong interest in
              full-stack web development and AI-powered applications.
              I enjoy building real-world products using React,
              Node.js, MongoDB, REST APIs, and AI integrations.
              I'm passionate about creating interactive and
              user-focused applications in fast-paced environments.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                React
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                Node.js
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                MongoDB
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                Java
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-8 bg-[#111111]">

        <h2 className="text-4xl font-bold text-center mb-16 text-purple-500">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="bg-black p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Frontend
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Backend
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Flask</li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Database
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Supabase</li>
            </ul>
          </div>

          <div className="bg-black p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              AI & Tools
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Gemini AI API</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Jupyter Notebook</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8">

        <h2 className="text-4xl font-bold text-center mb-16 text-purple-500">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              PrepwithAI
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered mock interview platform using React,
              Supabase, PostgreSQL, and Gemini AI API.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              React • PostgreSQL • Gemini API
            </p>

            <a
  href="https://github.com/malleshwaramkeerthana/PrepAI.git"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 inline-block"
>
  View Project
</a>

          </div>

          <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              Flight Price Prediction
            </h3>

            <p className="text-gray-400 mb-4">
              ML-powered airfare prediction system using ensemble models
              and backend API integration.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              Python • Flask • Machine Learning
            </p>

            <a
  href="https://github.com/malleshwaramkeerthana/Flight-Price-Prediction-using-ML"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 inline-block"
>
  View Project
</a>

          </div>

          <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              AI Landmark Description App
            </h3>

            <p className="text-gray-400 mb-4">
              Gemini-powered tourist assistant with image recognition
              and multilingual support.
            </p>

            <p className="text-sm text-purple-400 mb-6">
              React • Flask • Gemini AI
            </p>

            <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
              View Project
            </button>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-[#111111]">

        <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex flex-col gap-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
          ></textarea>

          <button className="bg-purple-600 py-4 rounded-xl hover:bg-purple-700 transition">
            Send Message
          </button>

        </form>

      </section>

    </div>
    
  );
}

export default App;