
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar() {
  const [isUniversitySubmenuOpen, setIsUniversitySubmenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
    <div className=" flex items-left justify-between">
      <div className="text-white text-2xl font-bold ml-5 ">MyApp</div>
      <div className="hidden md:flex space-x-8 mr-5 mr-5">
        <a href="#university" className="text-white hover:text-gray-300">Home</a>
        <div className="relative">
          <button
            onClick={() => setIsUniversitySubmenuOpen(!isUniversitySubmenuOpen)}
            className="text-white hover:text-gray-300"
          >
            University
          </button>
          {isUniversitySubmenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-700 rounded-lg shadow-lg z-10 w-[120px] ">
              <a href="#programs" className="block px-4 py-2 text-white hover:bg-gray-600">Programs</a>
          <a href="#admissions" className="block px-4 py-2 text-white hover:bg-gray-600">Admissions</a>
          <a href="#research" className="block px-4 py-2 text-white hover:bg-gray-600">Research</a>
            </div>
          )}
        </div>
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>
    </div>
    {isOpen && (
      <div className="md:hidden mt-4">
        <a href="#home" className="block text-white py-2 hover:bg-gray-700">Home</a>
        <div className="relative">
          <button
            onClick={() => setIsUniversitySubmenuOpen(!isUniversitySubmenuOpen)}
            className="text-white hover:text-gray-300"
          >
            University
          </button>
          {isUniversitySubmenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-700 rounded-lg shadow-lg z-10 w-[120px] ">
              <a href="#programs" className="block px-4 py-2 text-white hover:bg-gray-600">Programs</a>
          <a href="#admissions" className="block px-4 py-2 text-white hover:bg-gray-600">Admissions</a>
          <a href="#research" className="block px-4 py-2 text-white hover:bg-gray-600">Research</a>
            </div>
          )}
        </div>
        <a href="#about" className="block text-white py-2 hover:bg-gray-700">About</a>
        <a href="#contact" className="block text-white py-2 hover:bg-gray-700">Contact</a>
      </div>
    )}
  </nav>
  );
}
