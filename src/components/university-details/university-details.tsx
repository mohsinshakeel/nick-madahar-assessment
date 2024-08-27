import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  university: { 
    name: string;
    alpha_two_code: string;
    country: string;
    web_pages: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, university }) => {
  if (!isOpen || !university) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_"
            alt="University"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-2 text-center">{university.name}</h3>
          <p className="text-base mb-1 text-center">Country: {university.country}</p>
          <p className="text-base mb-2 text-center">Alpha_two_code: {university.alpha_two_code}</p>
          <p className="text-base text-center">
            Website: <a href={university.web_pages[0]} className="text-blue-500 hover:underline">{university.web_pages[0]}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
