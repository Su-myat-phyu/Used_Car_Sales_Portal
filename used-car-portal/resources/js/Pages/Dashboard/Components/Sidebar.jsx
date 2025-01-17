
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const links = [
        { name: 'Users Management', key: 'users' },
        { name: 'Car Posts Approval', key: 'carPosts' },
        { name: 'Appointments Approval', key: 'appointments' },
        { name: 'Transactions', key: 'transactions' },
    ];

    return (
        <div className="w-1/5 bg-white-800 text-bold h-screen flex flex-col border-r-2 border-gray-300">
            <div className="p-4 text-lg font-bold border-b border-gray-700">
                Admin Dashboard
            </div>
            <div className="flex-1 mt-4 text-gray-800">
                {links.map((link) => (
                    <button
                        key={link.key}
                        onClick={() => setActiveSection(link.key)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-300 ${
                            activeSection === link.key ? 'bg-gray-400' : ''
                        }`}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
