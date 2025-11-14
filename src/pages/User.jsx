import React, { useMemo, useState } from 'react';
import { Eye, Pencil, Trash2, Plus, Search, Sun, Moon, ChevronRight, ChevronLeft } from 'lucide-react';

const UserList = () => {
    const [theme, setTheme] = useState('dark');
    const [searchQuery, setSearchQuery] = useState('');

    const users = [
        { id: 1, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: 5, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 6, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: 7, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=7' },
        { id: 8, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=8' },
        { id: 9, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: 10, name: 'Kristin Watson', product: 'Product name', phone: '$1,452,500', email: '1,638', avatar: 'https://i.pravatar.cc/150?img=10' },
    ];

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.product.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

    return (
        <div>
            <header className="flex items-center flex-wrap justify-between gap-5 mb-7">
                <h3 className={`text-xl font-semibold dark:text-gray-200 text-gray-800`}>
                    All User
                </h3>
                <div className="flex items-center gap-4">
                    <div className={`text-sm dark:text-[#FFFFFF] text-[#575864]`}>
                        <span className={'hover:text-[#2275fc] cursor-pointer'}>Dashboard</span>
                        <ChevronRight className="inline mx-2" size={12} />
                        <span className={'hover:text-[#2275fc] cursor-pointer'}>User</span>
                        <ChevronRight className="inline mx-2" size={12} />
                        <span className={'dark:text-[#94A3B8] text-[#95989D]'}>All User</span>
                    </div>
                </div>
            </header>

            <main className="">
                <div className={`rounded-xl dark:bg-[#1a2332] bg-white p-6`}>
                    {/* Search and Add Button */}
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                        <div className="flex-grow max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full px-4 py-2.5 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500  dark:bg-[#253447] dark:border-[#2d3748] dark:text-gray-200 dark:placeholder-gray-500 bg-white border-gray-300 text-gray-800 placeholder-gray-400`}
                                />
                                <button className={`absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-400 text-gray-500`}>
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-colors font-medium">
                            <Plus size={18} />
                            Add new
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        {/* Table Header */}
                        <div className={`flex gap-5 mb-4 px-4 dark:text-gray-400 text-gray-600 text-xs font-semibold uppercase`}>
                            <div className="flex-1 min-w-[250px]">User</div>
                            <div className="w-32">Phone</div>
                            <div className="w-32">Email</div>
                            <div className="w-32">Action</div>
                        </div>

                        {/* Table Body */}
                        <ul className="flex flex-col">
                            {filteredUsers.map((user, index) => (
                                <li
                                    key={user.id}
                                    className={`flex items-center gap-4 px-4 py-4 border-b transition-colors dark:border-[#2d3748] dark:hover:bg-[#253447] border-gray-200 hover:bg-gray-50`}
                                >
                                    <div className="flex items-center justify-between gap-5 flex-grow">
                                        <div className="flex items-center gap-3 flex-1 min-w-[250px]">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="w-10 h-10 rounded-lg object-cover"
                                            />
                                            <div>
                                                <div className={`font-medium dark:text-gray-200 text-gray-800`}>
                                                    {user.name}
                                                </div>
                                                <div className={`text-xs mt-0.5 dark:text-gray-500 text-gray-500`}>
                                                    {user.product}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-32 dark:text-gray-300 text-gray-700`}>
                                            {user.phone}
                                        </div>
                                        <div className={`w-32 dark:text-gray-300 text-gray-700`}>
                                            {user.email}
                                        </div>
                                        <div className="flex items-center gap-2 w-32">
                                            <button className="p-2 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-colors">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg text-green-400 hover:bg-green-500/10 transition-colors">
                                                <Pencil size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divider */}
                    <div className={`my-6 border-t dark:border-[#2d3748] border-gray-200`}></div>

                    {/* Footer - Pagination */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className={`text-xs dark:text-gray-400 text-gray-600`}>
                            Showing 10 entries
                        </div>
                        <ul className="flex items-center gap-1">
                            <li>
                                <button className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-[#253447] text-gray-600 hover:bg-gray-100`}>
                                    <ChevronLeft size={16} />
                                </button>
                            </li>
                            <li>
                                <button className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-[#253447] text-gray-600 hover:bg-gray-100`}>
                                    1
                                </button>
                            </li>
                            <li>
                                <button className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors dark:bg-blue-500 dark:text-white bg-blue-500 text-white'}`}>
                                    2                               </button>
                            </li>
                            <li>
                                <button className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-[#253447] text-gray-600 hover:bg-gray-100`}>
                                    3
                                </button>
                            </li>
                            <li>
                                <button className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-[#253447] text-gray-600 hover:bg-gray-100`}>
                                    <ChevronRight size={16} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserList;