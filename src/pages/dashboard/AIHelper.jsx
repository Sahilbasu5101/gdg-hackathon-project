import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
    Plus, 
    GitBranch, 
    FileText, 
    Briefcase, 
    Search, 
    Bell, 
    Repeat, 
    Cloud,
    Paperclip,
    Send,
    CheckCircle2,
    Circle,
    TrendingUp,
    MessageCircle,
    FileEdit,
    Map,
    MessageSquare
} from 'lucide-react';

const AIHelper = () => {
    const { userData, user } = useAuth();
    const displayName = userData?.displayName || user?.displayName || 'Student';
    const firstName = displayName.split(' ')[0];

    const [messages, setMessages] = useState([
        { role: 'assistant', text: `I've analyzed your profile, ${firstName}. Your Cloud Computing skills could use a boost. Based on current market trends, adding AWS or Azure certifications would put you in the top 5% of applicants for the roles you're targeting.` }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;
        const userMsg = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) throw new Error("Missing API Key");
            
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
            const chatHistory = messages.map(msg => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.text }]
            }));
            
            const chat = model.startChat({ history: chatHistory });
            const result = await chat.sendMessage(userMsg);
            const responseText = result.response.text();
            
            setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', text: 'Sorry, I encountered an error. Please check your API key and try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-full bg-[#f8f9fa] overflow-hidden">
            
            {/* Left Column: Mentorship List */}
            <div className="w-64 border-r border-gray-100 bg-[#f8f9fa] flex flex-col p-6 hidden lg:flex shrink-0">
                <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 shadow-sm hover:bg-gray-50 transition-colors mb-8">
                    <Plus className="size-4" /> New Mentorship
                </button>

                <div className="flex-1">
                    <h3 className="text-[10px] font-[900] text-gray-400 uppercase tracking-wider mb-4">Recent Mentorship</h3>
                    
                    <div className="space-y-2">
                        <button className="flex items-center gap-3 w-full p-3 bg-white border border-indigo-100 rounded-2xl text-left shadow-sm group">
                            <div className="size-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <GitBranch className="size-4" />
                            </div>
                            <span className="text-sm font-bold text-indigo-900 flex-1">Career Path Update</span>
                        </button>
                        
                        <button className="flex items-center gap-3 w-full p-3 rounded-2xl text-left hover:bg-gray-100 transition-colors text-gray-500 group">
                            <div className="size-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                                <FileText className="size-4" />
                            </div>
                            <span className="text-sm font-bold flex-1">Resume Feedback</span>
                        </button>
                        
                        <button className="flex items-center gap-3 w-full p-3 rounded-2xl text-left hover:bg-gray-100 transition-colors text-gray-500 group">
                            <div className="size-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                                <Briefcase className="size-4" />
                            </div>
                            <span className="text-sm font-bold flex-1">Internship Search</span>
                        </button>
                    </div>
                </div>
                
                <div className="pt-4 mt-auto">
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">
                        <div className="size-5 rounded-full bg-gray-200 flex items-center justify-center text-white text-[10px]">?</div>
                        Help Center
                    </button>
                </div>
            </div>

            {/* Middle Column: Chat Interface */}
            <div className="flex-1 flex flex-col bg-white border-r border-gray-100 min-w-0">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-orange-100 overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                            {/* User Avatar */}
                            <img src={userData?.photoURL || user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=random`} alt="User" className="size-full object-cover" />
                        </div>
                        <h2 className="text-xl font-[900] text-gray-900 tracking-tight truncate">Ready to level up, {firstName}?</h2>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-gray-600 transition-colors"><Search className="size-5" strokeWidth={2.5} /></button>
                        <button className="hover:text-gray-600 transition-colors"><Bell className="size-5" strokeWidth={2.5} /></button>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-6 overflow-y-auto bg-white flex flex-col gap-6">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                            {msg.role === 'assistant' ? (
                                <div className="size-10 rounded-full bg-[#1b1065] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                                    AH
                                </div>
                            ) : (
                                <div className="size-10 rounded-full overflow-hidden shrink-0 border-2 border-orange-200 shadow-sm relative">
                                    <img src={userData?.photoURL || user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=random`} alt="User" className="size-full object-cover" />
                                </div>
                            )}
                            <div className={`flex flex-col gap-3 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`p-5 rounded-3xl font-medium leading-relaxed max-w-[600px] whitespace-pre-wrap ${msg.role === 'user' 
                                    ? 'bg-[#2e10db] text-white rounded-tr-sm shadow-md' 
                                    : 'bg-[#f8f9fb] text-gray-700 rounded-tl-sm border border-gray-100'}`}>
                                    {msg.text}
                                </div>
                                {idx === 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                                            <GitBranch className="size-4" /> Update Roadmap
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                                            <Cloud className="size-4" /> Show Cloud Resources
                                        </button>
                                    </div>
                                )}
                                {msg.role === 'user' && <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pr-2">DELIVERED</span>}
                            </div>
                        </div>
                    ))}

                    {/* AI Typing Indicator */}
                    {isLoading && (
                        <div className="flex gap-4 max-w-[85%]">
                            <div className="size-10 rounded-full bg-[#1b1065] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                                AH
                            </div>
                            <div className="bg-[#f8f9fb] p-5 rounded-3xl rounded-tl-sm border border-gray-100 flex items-center gap-1.5 h-12">
                                <div className="size-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="size-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="size-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Input Area */}
                <div className="p-6 border-t border-gray-50 bg-white">
                    {/* Quick Prompts */}
                    <div className="flex justify-center gap-3 mb-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">
                            <FileEdit className="size-3.5" /> Fix Resume
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">
                            <Map className="size-3.5" /> Update Roadmap
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">
                            <MessageCircle className="size-3.5" /> Mock Interview
                        </button>
                    </div>
                    {/* Input box */}
                    <div className="flex items-center gap-2 sm:gap-3 bg-[#f8f9fb] rounded-full p-2 pr-2 border border-gray-100 shadow-inner">
                        <button className="p-2 sm:p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                            <Paperclip className="size-5" />
                        </button>
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder={`Ask anything to your career mentor, ${firstName}...`}
                            className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-gray-700 placeholder:text-gray-400 min-w-0"
                            disabled={isLoading}
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={isLoading}
                            className={`p-2 sm:p-3 rounded-full transition-colors shadow-md shrink-0 ${isLoading ? 'bg-gray-300' : 'bg-[#2e10db] hover:bg-[#1b1065] text-white'}`}
                        >
                            <Send className="size-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Column: Insights & Progress */}
            <div className="w-[320px] bg-[#fcfcfd] p-6 hidden xl:block overflow-y-auto">
                <h3 className="text-xl font-[900] text-gray-900 mb-8 tracking-tight">Insights & Progress</h3>

                {/* Daily Goals */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="font-[900] text-gray-900 text-sm">Daily Goals</h4>
                        <span className="text-[10px] font-bold text-[#2e10db] bg-indigo-50 px-2.5 py-1 rounded-md">2/3 Done</span>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 opacity-50">
                            <CheckCircle2 className="size-5 text-[#2e10db] shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-gray-500 line-through">Complete 1 LeetCode challenge</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="size-5 text-[#2e10db] shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-gray-700">Review AWS Lambda Docs</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Circle className="size-5 text-gray-300 shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-gray-700">Update LinkedIn Experience</span>
                        </div>
                    </div>
                </div>

                {/* Weekly Activity */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="font-[900] text-gray-900 text-sm">Weekly Activity</h4>
                        <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                            <TrendingUp className="size-3" /> 15% more
                        </span>
                    </div>
                    {/* Mock Bar Chart */}
                    <div className="flex items-end justify-between h-24 gap-2">
                        <div className="w-full bg-gray-100 rounded-t-sm h-[40%]"></div>
                        <div className="w-full bg-gray-100 rounded-t-sm h-[60%]"></div>
                        <div className="w-full bg-[#2e10db] rounded-t-sm h-[90%] shadow-lg shadow-indigo-500/20"></div>
                        <div className="w-full bg-indigo-400 rounded-t-sm h-[70%]"></div>
                        <div className="w-full bg-gray-100 rounded-t-sm h-[30%]"></div>
                        <div className="w-full bg-gray-100 rounded-t-sm h-[50%]"></div>
                    </div>
                </div>

                {/* WhatsApp Sync Card */}
                <div className="bg-gradient-to-br from-[#2e10db] to-[#1b1065] rounded-3xl p-6 shadow-xl shadow-indigo-500/20 text-white relative overflow-hidden">
                    {/* Decorative bubble */}
                    <div className="absolute top-4 right-4 text-white/10">
                        <MessageSquare className="size-16 fill-current" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Repeat className="size-5 text-indigo-300" />
                            <h4 className="font-bold text-sm text-white">WhatsApp Sync</h4>
                        </div>
                        
                        <div className="mb-6">
                            <span className="text-[9px] font-[900] text-indigo-300 uppercase tracking-widest mb-2 block">PREVIEW: MORNING BRIEFING</span>
                            <p className="text-xs font-medium italic text-indigo-100 leading-relaxed shadow-sm">
                                "Good morning {firstName}! Today's goal: Review React Native Performance tips. Ready?"
                            </p>
                        </div>
                        
                        <button className="w-full py-3 bg-white text-[#2e10db] font-[900] text-sm rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                            Sync WhatsApp
                        </button>
                    </div>
                </div>
                
                {/* Footer text */}
                <p className="text-[10px] text-center text-gray-400 mt-8 italic px-4 font-medium">
                    "The best way to predict the future is to create it."
                </p>
            </div>
            
        </div>
    );
};

export default AIHelper;
