'use client'
import React, { useEffect, useState } from 'react';

import { Menu } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import Modal from '../university-details/university-details';
import Navbar from '../navbar/navbar';


interface Uni {
    name: string;
    alpha_two_code: string;
    country: string;
    web_pages: string[];
}

const University: React.FC = () => {
    const [universities, setUniversities] = useState<Uni[]>([]);
    const [selectedUniversity, setSelectedUniversity] = useState<Uni | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [, setError] = useState<string | null>(null);
    const handleOpenModal = (university: Uni) => {
        setSelectedUniversity(university);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUniversity(null);
    };

    const handleMenuClick = (university: typeof universities[0], action: 'view' | 'edit' | 'delete' | 'flag') => {
        switch (action) {
            case 'view':
                handleOpenModal(university);
                break;
            case 'edit':
                break;
            case 'delete':
                break;
            case 'flag':
                break;
        }
    };

    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await fetch('http://universities.hipolabs.com/search?limit=20');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUniversities(data);
            } catch (error) {
                setError('Failed to fetch universities');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUniversities();
    }, []);

    return (
        <div>
            <Navbar />
            <main className="p-4">
            {isLoading ? (
                    <div className="flex justify-center items-center h-96">
                        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {universities.map((university) => (
                        <div
                            key={university.name}
                            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center relative"
                        >
                            <img onClick={() => handleMenuClick(university, 'view')} src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_" alt='' className="w-24 h-24 rounded-full mb-4  cursor-pointer" />
                            <h4 onClick={() => handleMenuClick(university, 'view')} className="text-lg font-semibold mb-2 cursor-pointer">{university.name}</h4>

                            <Menu as="div" className="absolute top-2 right-2">
                                <Menu.Button className="text-gray-600 hover:text-gray-900">
                                    <EllipsisVerticalIcon className="w-5 h-5" />
                                </Menu.Button>
                                <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Flag
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                    ))}
                </div>
                 )}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} university={selectedUniversity} />
            </main>
        </div>
    );
};

export default University;
