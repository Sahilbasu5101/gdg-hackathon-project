import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/Sidebar';
import GeminiAssistant from '../../components/dashboard/GeminiAssistant';

import { useAuth } from '../../context/AuthContext';

const DashboardLayout = () => {
    const { user, userData } = useAuth();
    const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'Student';
    const fullName = user?.displayName || 'Student Name';
    const course = userData?.onboarding?.course || 'Course Not Set';
    const avatarSeed = fullName.replace(/\s/g, '');

    return (
        <div className="min-h-screen bg-white md:bg-gray-50 font-display relative">
            <Sidebar />
            <GeminiAssistant />

            {/* Main Content Wrapper */}
            <main className="md:pl-64 min-h-screen flex flex-col transition-all duration-300">
                {/* Header Placeholder (will be proper component later) */}
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="md:hidden">
                            {/* Mobile Menu Trigger Placeholder */}
                            <span className="material-symbols-outlined text-gray-600">menu</span>
                        </div>
                        {/* Search Bar */}
                        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 h-10 w-96 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                            <input
                                type="text"
                                placeholder="Search for challenges, jobs, or mentors..."
                                className="bg-transparent border-none outline-none text-sm font-medium text-gray-700 w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <span className="material-symbols-outlined filled">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 mx-1"></div>
                        <div className="flex items-center gap-3 pl-2">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-gray-900 leading-none">{fullName}</p>
                                <p className="text-[10px] font-bold text-gray-500 mt-0.5">{course}</p>
                            </div>
                            <div className="size-9 rounded-full bg-gray-200 border border-white shadow-sm overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Page Content */}
                <div className="p-6 md:p-8 max-w-[1600px] mx-auto w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
