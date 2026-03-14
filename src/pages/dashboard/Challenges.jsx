import React, { useState } from 'react';

const Challenges = () => {
    const [activeTab, setActiveTab] = useState('Live');

    return (
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full font-display pb-12">
            {/* Main Column */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                {/* Featured Challenge Card */}
                <div className="relative rounded-[28px] overflow-hidden bg-[#111118] text-white p-8 md:p-10 text-left isolation-auto">
                    {/* Background decorations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent -z-10 blur-xl"></div>
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            Featured Challenge
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] tracking-tight leading-tight mb-4 drop-shadow-md">
                            Global AI Innovation<br />Hackathon 2024
                        </h2>
                        
                        <p className="text-gray-400 font-medium text-sm md:text-base mb-8 max-w-md">
                            Win <strong className="text-white">$5,000</strong> + Google Referral. Join the world's most elite AI challenge.
                        </p>

                        {/* Countdown */}
                        <div className="flex items-center gap-4 mb-8">
                            {[
                                { val: '03', label: 'DAYS' },
                                { val: '14', label: 'HOURS' },
                                { val: '25', label: 'MINS' }
                            ].map((time, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="size-14 md:size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl font-black shadow-inner backdrop-blur-md mb-2">
                                        {time.val}
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{time.label}</span>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 bg-primary hover:bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/30 group">
                            Register Now
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>

                    {/* Large Background Text Watermark */}
                    <div className="absolute bottom-4 right-10 text-[120px] font-black leading-none text-white/[0.02] -z-10 uppercase tracking-tighter select-none pointer-events-none md:block hidden">
                        AI<br/>NATURAL
                    </div>
                </div>

                {/* Tabs & Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                    <div className="flex bg-gray-100/80 p-1.5 rounded-2xl self-start">
                        {['Live', 'Upcoming', 'Past'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                                    activeTab === tab 
                                    ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200/50' 
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500 font-medium">Sort by:</span>
                        <button className="flex items-center gap-1 font-bold text-gray-800 hover:text-primary transition-colors">
                            Ending Soon
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                    </div>
                </div>

                {/* Challenge Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                        <div className="h-40 bg-[#0f293e] relative overflow-hidden flex items-center justify-center shrink-0">
                            {/* Abstract Tech Background */}
                            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0f293e] to-transparent"></div>
                            
                            {/* Decor blocks */}
                            <div className="w-32 h-16 bg-[#4ed1c5]/20 rounded-lg border border-[#4ed1c5]/40 absolute transform -rotate-12 translate-x-12 translate-y-4 backdrop-blur-sm"></div>
                            <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 absolute top-4 left-10 backdrop-blur-md"></div>
                            
                            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
                                <span className="size-2.5 rounded-full bg-[#4ed1c5]"></span>
                                <span className="text-[11px] font-black text-gray-800 uppercase tracking-wide">TechCorp</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-[800] text-gray-900 mb-2">Data Science Sprint</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                                Predictive analytics for sustainable energy consumption.
                            </p>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[16px] filled">payments</span>
                                    <span className="text-xs font-bold">$2,000 Prize</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <span className="material-symbols-outlined text-[16px]">group</span>
                                    <span className="text-xs font-medium">1.2k joined</span>
                                </div>
                            </div>
                            
                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-xs font-bold text-primary">48h remaining</p>
                                    <p className="text-[10px] font-bold text-gray-400">75% Complete</p>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[75%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                        <div className="h-40 bg-[#8cb79f] relative overflow-hidden flex items-center justify-center shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            <h2 className="text-4xl font-[900] text-white/90 tracking-tighter mix-blend-overlay drop-shadow-sm uppercase">UI/UX Jam</h2>
                            
                            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
                                <span className="size-2.5 rounded-full bg-[#8cb79f]"></span>
                                <span className="text-[11px] font-black text-gray-800 uppercase tracking-wide">DesignStudio</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-[800] text-gray-900 mb-2">UI/UX Design Jam</h3>
                            <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                                Reimagine the future of digital education interfaces.
                            </p>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[16px] filled">payments</span>
                                    <span className="text-xs font-bold">$1,500 Prize</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <span className="material-symbols-outlined text-[16px]">group</span>
                                    <span className="text-xs font-medium">800 joined</span>
                                </div>
                            </div>
                            
                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-xs font-bold text-primary">5d left</p>
                                    <p className="text-[10px] font-bold text-gray-400">30% Complete</p>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[30%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6 lg:gap-8">
                {/* Winner Spotlight */}
                <div className="bg-white rounded-[28px] border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="flex items-center gap-2 mb-6 self-start">
                        <span className="material-symbols-outlined text-yellow-500 filled">emoji_events</span>
                        <h3 className="font-[800] text-gray-900">Winner Spotlight</h3>
                    </div>
                    
                    <div className="w-full bg-gray-50/50 rounded-2xl p-6 flex flex-col items-center">
                        <div className="relative mb-4">
                            <div className="size-20 rounded-full bg-gray-200 border-[3px] border-white shadow-md overflow-hidden relative">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=MarkMukerburg`} alt="Mark" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 size-6 bg-yellow-400 border-2 border-white rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-[12px] text-white">star</span>
                            </div>
                        </div>
                        
                        <h4 className="font-black text-gray-900 text-lg mb-1">Mark Mukerburg</h4>
                        <p className="text-[11px] font-medium text-gray-500 mb-6">
                            Winner: Python Data Sprint #42
                        </p>
                        
                        <button className="w-full py-2.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-sm transition-colors flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-sidebar focus:outline-none">
                            View Project
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        </button>
                    </div>
                </div>

                {/* Top Players */}
                <div className="bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-[800] text-gray-900">Top Players</h3>
                        <button className="text-[11px] font-bold text-primary hover:underline">View All</button>
                    </div>
                    
                    <div className="space-y-5">
                        {[
                            { rank: '01', name: 'Alex Chen', wins: '12 WINS', xp: '5,200 XP', seed: 'AlexC' },
                            { rank: '02', name: 'Mark Z.', wins: '9 WINS', xp: '4,850 XP', seed: 'MarkZ' },
                            { rank: '03', name: 'Sarah L.', wins: '7 WINS', xp: '4,120 XP', seed: 'SarahL' },
                        ].map((player, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-sm font-[900] text-gray-400 w-5">{player.rank}</span>
                                <div className="size-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.seed}`} alt={player.name} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="text-sm font-bold text-gray-900 truncate">{player.name}</span>
                                    <span className="text-[10px] font-medium text-gray-400">{player.wins}</span>
                                </div>
                                <span className="text-xs font-black text-primary shrink-0">{player.xp}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promotional Card */}
                <div className="bg-primary rounded-[28px] p-6 lg:p-8 text-white relative overflow-hidden shadow-lg shadow-primary/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="size-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm border border-white/10">
                        <span className="material-symbols-outlined text-[24px]">work</span>
                    </div>
                    
                    <h3 className="text-xl font-[900] mb-3 leading-tight tracking-tight">Host Your Own Challenge</h3>
                    <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">
                        Ready to find top talent? Launch a custom challenge and hire the best students globally.
                    </p>
                    
                    <button className="w-full py-3.5 bg-white text-primary hover:bg-gray-50 font-[800] text-sm rounded-xl transition-all shadow-md focus:ring-4 focus:ring-white/20 outline-none">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Challenges;
