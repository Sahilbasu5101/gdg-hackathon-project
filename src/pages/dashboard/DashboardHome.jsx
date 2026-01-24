import { TrendingUp, Sparkles, Award, BookOpen, Target, Calendar, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const DashboardHome = () => {
    const { user, userData } = useAuth();

    // Safe access to onboarding data
    const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'Student';

    // Calculate a mock score based on profile completion
    const calculateReadiness = () => {
        let score = 20; // Base score
        if (userData?.onboarding?.skills?.problemSolving > 80) score += 15;
        if (userData?.onboarding?.skills?.technical > 50) score += 15;
        if (userData?.onboarding?.goalsShortTerm?.length > 0) score += 10;
        if (userData?.onboarding?.verifiedProblemSolver) score += 20;
        return Math.min(score, 98); // Cap at 98
    };

    const readinessScore = calculateReadiness();

    // Determine skill gaps based on career path (simple logic for demo)
    const careerPath = userData?.onboarding?.careerpath || 'Tech';
    const targetRole = careerPath === 'tech' ? 'Full Stack Developer' :
        careerPath === 'design' ? 'Product Designer' : 'Industry Professional';

    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-[900] text-gray-900 tracking-tight">Welcome back, {firstName}</h1>
                    <p className="text-gray-500 font-medium mt-1">Your career preparation journey is on track. Keep it up!</p>
                </div>
                <div className="hidden md:block">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last updated: Today, 9:00 AM</span>
                </div>
            </div>

            {/* Grid Layout Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Row: Readiness & Completion */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-50"><Sparkles className="size-6 text-yellow-500" /></div>
                    <div className="text-center relative z-10">
                        <div className="text-6xl font-[900] text-gray-900 tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">{readinessScore}%</div>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Readiness Score</div>
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold">
                            <TrendingUp className="size-3" />
                            <span>Top 10% of class</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 h-[340px] flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Profile Completion</h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">Complete your profile to unlock AI recommendations</p>
                        </div>
                        <div className="size-12 rounded-full border-[4px] border-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-700">
                            {userData?.onboardingCompleted ? '100%' : '50%'}
                        </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
                            <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                <Award className="size-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900 text-sm">Add your certifications</h4>
                                <p className="text-xs text-gray-500 font-medium">Verify your skills with certificates</p>
                            </div>
                            <button className="text-xs font-bold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">Action</button>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
                            <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <BookOpen className="size-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900 text-sm">Upload Project Proofs</h4>
                                <p className="text-xs text-gray-500 font-medium">Showcase your best work</p>
                            </div>
                            <button className="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">Do Later</button>
                        </div>
                    </div>
                </div>

                {/* Middle Row: Milestones & Events */}
                <div className="lg:col-span-2 bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-500/30 h-[240px] flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <div className="flex items-center gap-2 opacity-80 mb-1">
                                <Target className="size-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Next Milestone</span>
                            </div>
                            <h3 className="text-2xl font-bold">Internship Ready</h3>
                        </div>
                        <div className="bg-indigo-500/40 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-indigo-400/30">
                            In Progress
                        </div>
                    </div>

                    <div className="space-y-2 relative z-10">
                        <div className="flex justify-between text-xs font-medium opacity-80">
                            <span>Progress</span>
                            <span>3/5 Steps</span>
                        </div>
                        <div className="h-2 bg-indigo-900/30 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-3/5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        </div>
                        <p className="text-xs opacity-70 mt-2 font-medium">Complete 2 more projects to achieve this.</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 h-[240px] flex flex-col relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <Calendar className="size-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Upcoming</h4>
                            <p className="text-xs text-gray-500 font-bold">Tomorrow, 5:00 PM</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Google Cloud Jam</h3>
                            <p className="text-xs text-gray-500 font-medium line-clamp-2">Join the study jam to learn about GenAI on Google Cloud.</p>
                        </div>
                        <div className="flex -space-x-2 mt-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="size-6 rounded-full bg-gray-200 border-2 border-white"></div>
                            ))}
                            <div className="size-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-500">+12</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Gap Analysis */}
                <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 min-h-[300px] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Skill Gap Analysis</h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">Based on your goal: <span className="text-indigo-600">{targetRole}</span></p>
                        </div>
                        <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">View Detailed Report</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Strengths</h4>
                            <div className="space-y-3">
                                {['React.js', 'Tailwind CSS', 'JavaScript (ES6+)'].map(skill => (
                                    <div key={skill} className="flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-100">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-green-500"></div>
                                            <span className="font-bold text-gray-700 text-sm">{skill}</span>
                                        </div>
                                        <Check className="size-4 text-green-600" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Missing / To Improve</h4>
                            <div className="space-y-3">
                                {['Backend (Node.js)', 'Database Management', 'System Design'].map(skill => (
                                    <div key={skill} className="flex items-center justify-between p-3 rounded-xl bg-red-50 border border-red-100">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-red-500"></div>
                                            <span className="font-bold text-gray-700 text-sm">{skill}</span>
                                        </div>
                                        <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">Required</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
