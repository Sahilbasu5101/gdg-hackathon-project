import { useState } from 'react';

import {
    Search,
    Bell,
    Settings,
    MessageSquare,
    Users,
    Calendar,
    TrendingUp,
    Sparkles,
    Share2,
    MoreHorizontal,
    Briefcase,
    Zap,
    BookOpen,
    Filter,
    MapPin,
    Building2,
    GraduationCap,
    ArrowRight,
    Plus,
    CheckCircle2,
    Heart,
    Code2
} from 'lucide-react';

const Community = () => {
    const [activeTab, setActiveTab] = useState('feed');

    return (
        <div className="max-w-[1400px] mx-auto space-y-6 pb-20">
            {/* Top Navigation / Search Bar area could go here if not in main layout */}

            {/* Stats Overview (Visible on Feed Tab) */}
            {activeTab === 'feed' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Current Track</p>
                            <h3 className="text-xl font-[900] text-gray-900">Product Management</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+5% rank</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Active Circles</p>
                            <h3 className="text-xl font-[900] text-gray-900">12 Communities</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+2 this week</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Weekly Engagement</p>
                            <h3 className="text-xl font-[900] text-gray-900">85% Score</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Top 10%</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* Center Column (Feed/Tabs) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs */}
                    <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm inline-flex gap-2">
                        {[
                            { id: 'feed', label: 'Feed', icon: MessageSquare },
                            { id: 'circles', label: 'Circles', icon: Users },
                            { id: 'alumni', label: 'Alumni', icon: GraduationCap },
                            { id: 'events', label: 'Events', icon: Calendar },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <tab.icon className="size-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Feed Content */}
                    {activeTab === 'feed' && (
                        <div className="space-y-6">
                            {/* Post 1 */}
                            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-4">
                                        <div className="size-12 rounded-full bg-gray-200 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Liam" alt="User" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Liam Carter</h4>
                                            <p className="text-xs font-medium text-gray-500">Sophomore • CS @ Stanford</p>
                                        </div>
                                    </div>
                                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">Career Question</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Advice on landing a first PM internship?</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    I've been working on my personal portfolio projects but I'm struggling with the networking aspect. Is it better to focus on direct applications or cold reachouts to alumni on LinkedIn?
                                </p>
                                <div className="flex gap-2 mb-6">
                                    <span className="bg-gray-50 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg">#ProductManagement</span>
                                    <span className="bg-gray-50 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg">#Networking</span>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                    <div className="flex gap-6">
                                        <button className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm transition-colors">
                                            <Heart className="size-4" /> 24
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm transition-colors">
                                            <MessageSquare className="size-4" /> 8
                                        </button>
                                    </div>
                                    <button className="text-blue-600 font-bold text-sm hover:underline">Answer Thread</button>
                                </div>
                            </div>

                            {/* Post 2 */}
                            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-4">
                                        <div className="size-12 rounded-full bg-gray-200 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie" alt="User" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Jamie Chen</h4>
                                            <p className="text-xs font-medium text-gray-500">Senior • Data Science</p>
                                        </div>
                                    </div>
                                    <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">Resource</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Free SQL Mastery Guide for Interviews</h3>
                                <div className="bg-gray-900 rounded-xl h-48 mb-4 flex items-center justify-center relative overflow-hidden group">
                                    {/* Mock Image Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-900"></div>
                                    <div className="relative z-10 text-center text-emerald-100">
                                        <p className="font-serif text-2xl italic opacity-50">RESOURCE</p>
                                        <p className="text-3xl font-[900] tracking-tighter text-white mt-1">SQL CHEATSHEET</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Found this amazing resource that covers everything from basic JOINs to complex window functions. Perfect for anyone preparing for tech interviews this season!
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                    <div className="flex gap-6">
                                        <button className="flex items-center gap-2 text-gray-400 hover:text-pink-600 font-bold text-sm transition-colors">
                                            <Heart className="size-4" /> 56
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm transition-colors">
                                            <Share2 className="size-4" /> 12
                                        </button>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors">Download PDF</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Circles Tab Content */}
                    {activeTab === 'circles' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-[900] text-gray-900 mb-2">Goal Circles Workspace</h2>
                                <p className="text-gray-500 font-medium text-sm">Welcome back, Arjun! You have 2 circles needing updates today.</p>
                            </div>

                            {/* Active Commitments */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900">Active Commitments</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-3">
                                                <div className="size-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                                    <Code2 className="size-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">DSA 60-day grind</h4>
                                                    <p className="text-xs font-medium text-gray-500">Day 14 of 60 • Next sync: 8 PM</p>
                                                </div>
                                            </div>
                                            <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase">Active</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
                                            <span>Group Progress</span>
                                            <span>72%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                                            <div className="h-full bg-blue-600 w-[72%] rounded-full"></div>
                                        </div>
                                        <button className="w-full py-2.5 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                                            Update Progress
                                        </button>
                                    </div>

                                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-3">
                                                <div className="size-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                                    <Sparkles className="size-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">UI/UX Portfolio Builders</h4>
                                                    <p className="text-xs font-medium text-gray-500">Next Critique: Thursday</p>
                                                </div>
                                            </div>
                                            <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase">Action Required</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
                                            <span>Group Progress</span>
                                            <span>45%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                                            <div className="h-full bg-blue-600 w-[45%] rounded-full"></div>
                                        </div>
                                        <button className="w-full py-2.5 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                                            Upload Weekly Task
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Discover New Circles */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-gray-900">Discover New Circles</h3>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600">Trending</button>
                                        <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600">New</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { title: 'Web3 Masters', members: '15', level: 'High', img: 'tech', label: 'Tech' },
                                        { title: '6AM Productivity Club', members: '20', level: 'Extreme', img: 'lifestyle', label: 'Lifestyle' },
                                        { title: 'Deep Work Researchers', members: '12', level: 'Steady', img: 'study', label: 'Academics' },
                                    ].map((circle, i) => (
                                        <div key={i} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden group">
                                            <div className="h-32 bg-gray-200 relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                <span className="absolute bottom-3 left-3 bg-white text-gray-900 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">{circle.label}</span>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-gray-900 mb-1">{circle.title}</h4>
                                                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-3">
                                                    <Users className="size-3" /> {circle.members} members
                                                </div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="h-1 w-24 bg-gray-100 rounded-full overflow-hidden">
                                                        <div className={`h-full rounded-full ${i === 1 ? 'bg-red-500 w-full' : 'bg-orange-500 w-2/3'}`}></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase">{circle.level}</span>
                                                </div>
                                                <button className="w-full py-2 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors">Join Circle</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Alumni Tab Content */}
                    {activeTab === 'alumni' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-[900] text-gray-900 mb-2">Alumni Journey Discovery</h2>
                                <p className="text-gray-500 font-medium text-sm">Explore the paths of those who came before you. Peer-led growth.</p>
                            </div>

                            {/* Search */}
                            <div className="flex gap-4">
                                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-2 border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                                    <Search className="size-5 text-gray-400" />
                                    <input type="text" placeholder="Search by industry, company, college, or role..." className="bg-transparent border-none outline-none text-sm font-medium w-full text-gray-800" />
                                </div>
                                <div className="flex gap-2">
                                    {['Tech', 'Finance', 'Creative', 'Healthcare'].map(filter => (
                                        <button key={filter} className="hidden md:flex px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-600 items-center justify-between gap-2 hover:bg-gray-100">
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Alumni Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: 'Sarah Chen', role: 'Senior Product Designer', company: 'Google', school: 'Stanford University \'18', major: 'Physics Major', quote: 'From understanding quantum mechanics to designing intuitive user experiences.', path: ['Intern', 'Designer', 'Senior'] },
                                    { name: 'Marcus Thorne', role: 'Software Engineer', company: 'Tesla', school: 'MIT \'19', major: 'CS & Robotics', quote: 'Building the future of sustainable autonomy through code and integration.', path: ['Lab Asst', 'Junior Dev', 'SWE II'] }
                                ].map((alum, i) => (
                                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex gap-4">
                                                <div className="size-14 rounded-full bg-gray-100">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${alum.name}`} alt={alum.name} className="size-full" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{alum.name}</h4>
                                                    <p className="text-sm font-bold text-blue-600">{alum.role}</p>
                                                    <div className="flex items-center gap-1 text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">
                                                        <CheckCircle2 className="size-3 text-blue-500" /> {alum.company}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                                                <Briefcase className="size-5" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
                                            <GraduationCap className="size-4" />
                                            {alum.school} • {alum.major}
                                        </div>

                                        <p className="text-sm text-gray-600 italic mb-6">"{alum.quote}"</p>

                                        {/* Timeline */}
                                        <div className="relative pt-4 border-t border-gray-50">
                                            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100 top-1/2 -translate-y-1/2"></div>
                                            <div className="flex justify-between relative z-10">
                                                {alum.path.map((step, idx) => (
                                                    <div key={idx} className="flex flex-col items-center gap-2">
                                                        <div className={`size-3 rounded-full border-2 border-white ${idx === 2 ? 'bg-blue-600 ring-4 ring-blue-50' : 'bg-blue-600'}`}></div>
                                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{step}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                                            View Journey
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Events Tab Content */}
                    {activeTab === 'events' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-[900] text-gray-900 mb-2">Upcoming Events</h2>
                                <p className="text-gray-500 font-medium text-sm">Discover hackathons, workshops, and meetups happening near you.</p>
                            </div>

                            {/* Featured Event */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Calendar className="size-48" />
                                </div>
                                <div className="relative z-10">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider mb-4 inline-block">Featured Hackathon</span>
                                    <h3 className="text-3xl font-[900] mb-2">Global AI Challenge 2024</h3>
                                    <p className="text-blue-100 max-w-lg mb-6 text-sm font-medium">Join 5000+ developers building the future of Generative AI. $50k in prizes and direct interviews with top tech companies.</p>

                                    <div className="flex flex-wrap gap-6 mb-8">
                                        <div className="flex items-center gap-2 text-sm font-bold">
                                            <Calendar className="size-4" /> Oct 25 - 27
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold">
                                            <MapPin className="size-4" /> Hybrid / San Francisco
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold">
                                            <Users className="size-4" /> 1.2k Registered
                                        </div>
                                    </div>

                                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                                        Register Now
                                    </button>
                                </div>
                            </div>

                            {/* Events List */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900">This Week</h3>
                                {[
                                    { title: 'Tech Interview Prep with Google Engineers', type: 'Workshop', date: 'Nov 02 • 6:00 PM', location: 'Virtual', color: 'bg-green-100 text-green-700' },
                                    { title: 'Campus Meetup: Web3 Enthusiasts', type: 'Meetup', date: 'Nov 05 • 5:30 PM', location: 'Student Center, Room 302', color: 'bg-purple-100 text-purple-700' },
                                    { title: 'Resume Review Session', type: 'Career', date: 'Nov 07 • 2:00 PM', location: 'Career Center', color: 'bg-amber-100 text-amber-700' },
                                ].map((event, i) => (
                                    <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gray-50 p-3 rounded-xl text-center min-w-[60px]">
                                                <span className="block text-xs font-bold text-red-500 uppercase">{event.date.split(' ')[0]}</span>
                                                <span className="block text-xl font-[900] text-gray-900">{event.date.split(' ')[1]}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                                                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mt-1">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${event.color}`}>{event.type}</span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1"><MapPin className="size-3" /> {event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-50 hover:text-blue-600">
                                            <ArrowRight className="size-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar (Sticky) */}
                <div className="space-y-6 lg:sticky lg:top-24">

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                                <Plus className="size-4" /> Join New Circle
                            </button>
                            <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Sparkles className="size-4" /> Share Insight
                            </button>
                        </div>
                    </div>

                    {/* AI Summary Card - Dark Mode */}
                    <div className="bg-gray-900 p-6 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <Sparkles className="size-20" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4 text-indigo-300">
                                <Zap className="size-4 fill-current" />
                                <span className="text-xs font-bold uppercase tracking-widest">Weekly AI Summary</span>
                            </div>
                            <p className="text-sm font-medium text-gray-300 leading-relaxed mb-6">
                                This week's highlights: 4 new internship leads in Tech. Most active circle: <strong className="text-white">Data Science</strong>.
                            </p>
                            <ul className="space-y-3 text-xs font-medium text-gray-400 mb-6">
                                <li className="flex gap-2">
                                    <span className="size-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                                    Alumni from Google are hosting a Q&A this Thursday.
                                </li>
                                <li className="flex gap-2">
                                    <span className="size-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0"></span>
                                    Trending: Portfolio reviews in the UI/UX circle.
                                </li>
                            </ul>
                            <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors">
                                View Full Insights
                            </button>
                        </div>
                    </div>

                    {/* Trending Alumni */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-900">Trending Alumni</h3>
                            <button className="text-xs font-bold text-blue-600 hover:underline">See all</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Sarah Jenkins', role: 'Senior PM @ Google', img: 'Sarah' },
                                { name: 'Marcus Thorne', role: 'Data Lead @ Meta', img: 'Marcus' },
                            ].map((alumni, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-gray-100 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${alumni.img}`} alt={alumni.name} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{alumni.name}</p>
                                        <p className="text-[10px] font-bold text-gray-400">{alumni.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Circles */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Popular Circles</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Engineering', count: '2.4k active', icon: 'Code2', color: 'bg-blue-50 text-blue-600' },
                                { name: 'UI/UX Design', count: '1.8k active', icon: 'Palette', color: 'bg-purple-50 text-purple-600' },
                                { name: 'FinTech', count: '950 active', icon: 'DollarSign', color: 'bg-green-50 text-green-600' },
                            ].map((circle, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`size-8 rounded-lg flex items-center justify-center ${circle.color}`}>
                                            {/* Simple mock icons */}
                                            <span className="font-bold text-xs">{circle.name[0]}</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">{circle.name}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400">{circle.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Community;
