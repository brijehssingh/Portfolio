import image2 from "../../assets/image2.png";
import { Link } from 'react-router';

const Body = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 space-y-12">

      {/* Introduction Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 tracking-wider drop-shadow-sm">
          Hello, I'm Brijesh 👋
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          A passionate IT student pursuing B.Tech (IT), graduating in 2026.
          Welcome to my personal portfolio — explore my skills, projects, and how to connect!
        </p>
      </section>

      {/* Card Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl p-6 md:p-10 gap-10 backdrop-blur-md">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
  <div className="w-64 h-64 overflow-hidden rounded-lg border border-gray-600 shadow-lg bg-black">
    <img
      src={image2}
      alt="Brijesh Profile"
      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>
        {/* Info */}
        <div className="w-full md:w-1/2 space-y-6 flex-col justify-center">
          <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-blue-500 flex justify-center">About Me</h2>
          <div className="flex justify-center">
            <ul className="text-gray-300 space-y-2 text-base flex-col justify-center">
            <li><strong className="text-gray-400">Name:</strong> Brijesh</li>
            <li><strong className="text-gray-400">Degree:</strong> B.TECH (IT)</li>
            <li><strong className="text-gray-400">Passing Year:</strong> 2026</li>
          </ul>
          </div>
          <div className="text-center  flex justify-center">
            <Link to="/resume">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition shadow-md hover:shadow-xl">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link to="/skills">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition shadow-md hover:shadow-lg">
            Skills
          </button>
        </Link>
        <Link to="/project">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition shadow-md hover:shadow-lg">
            Projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition shadow-md hover:shadow-lg">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
