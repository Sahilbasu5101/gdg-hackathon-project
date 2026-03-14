import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { icon: 'home', label: 'Home', path: '/dashboard' },
        { icon: 'person', label: 'Profile', path: '/dashboard/profile' },
        { icon: 'bolt', label: 'AI Helper', path: '/dashboard/ai-helper' },
        { icon: 'emoji_events', label: 'Challenges', path: '/dashboard/challenges' },
        { icon: 'explore', label: 'Career Navigator', path: '/dashboard/career-navigator' },
        { icon: 'map', label: 'Roadmap', path: '/dashboard/roadmap' },
        { icon: 'groups', label: 'Community', path: '/dashboard/community' },
        { icon: 'insights', label: 'Insights', path: '/dashboard/insights' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-40 hidden md:flex font-display">
            {/* Logo Area */}
            <div className="p-6 flex items-center gap-3">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-[20px]">hub</span>
                </div>
                <div>
                    <h1 className="text-lg font-[900] tracking-tight text-gray-900 leading-none">Carrier Tech</h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Career Navigator</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === '/dashboard'} // Only exact match for Home
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                            ${isActive
                                ? 'bg-primary text-white shadow-lg shadow-primary/25 font-bold'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
                            }
                        `}
                    >
                        <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                        <span className="text-sm">{link.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-100">
                <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl w-full transition-colors">
                    <span className="material-symbols-outlined text-[20px]">settings</span>
                    <span className="text-sm font-medium">Settings</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
