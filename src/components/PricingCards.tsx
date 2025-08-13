import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingCards = () => {
    const [isYearly, setIsYearly] = useState(false);

    const toggleBilling = () => {
        setIsYearly(!isYearly);
    };

    const pricingPlans = {
        free: {
            monthly: 0,
            yearly: 0,
        },
        pro: {
            monthly: 17,
            yearly: 14, 
        },
        team: {
            monthly: 37,
            yearly: 30, 
        }
    };

    return (
        <div className="w-full h-[800px] px-4 mt-6 font-">
            <div className="max-w-6xl mx-auto">
               
                <div className='w-full flex items-center justify-center'>
                    <div 
                        className="w-[20%] p-3 text-center rounded-4xl mb-8 bg-[#1C2D32] flex items-center gap-3 cursor-pointer"
                        onClick={toggleBilling}
                    >
                        <span className={`${!isYearly ? 'text-white bg-[#495556]' : 'text-gray-400'} rounded-4xl pl-6 pr-6 pt-2 pb-2 transition-colors`}>
                            Monthly
                        </span>
                        <span className={`${isYearly ? 'text-white bg-[#495556]' : 'text-gray-400'} rounded-4xl pl-6 pr-6 pt-2 pb-2 transition-colors`}>
                            Yearly
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-6 max-w-5xl mx-auto mt-2">
                   
                    <div className="bg-[#1B1B1C] h-[500px] text-white rounded-xl p-8 flex flex-col translate-x-6">
                        <h3 className="text-xl font-semibold mb-4">Free</h3>
                        <p className="text-gray-300 text-sm mb-6">
                            Everything you need to supercharge your productivity.
                        </p>

                        <div className="mb-8">
                            <span className="text-4xl font-bold">${pricingPlans.free[isYearly ? 'yearly' : 'monthly']}</span>
                            <span className="text-gray-400 ml-2">/ {isYearly ? 'year' : 'month'}</span>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-medium mb-4">What's included</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    20 design generations/month
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Low-res downloads
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Basic style presets
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Limited customization options
                                </li>
                            </ul>
                        </div>

                        <button className="mt-auto bg-[#3E1E14] hover:bg-[#946151fd] border-2 border-[#a1553d] shadow-[1px_5px_40px_6px_#743a28] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                            Subscribe →
                        </button>
                    </div>

                    
                    <div className="bg-[#1B1B1C] text-white rounded-xl p-8 pl-14 pr-14 flex flex-col border-2 border-orange-500 relative scale-105 z-50">
                        <h3 className="text-xl font-semibold mb-4 text-orange-500">Pro</h3>
                        <p className="text-gray-300 text-sm mb-6">
                            Unlock a new level of your personal productivity.
                        </p>

                        <div className="mb-8">
                            <span className="text-4xl font-bold">${pricingPlans.pro[isYearly ? 'yearly' : 'monthly']}</span>
                            <span className="text-gray-400 ml-2">/ {isYearly ? 'year' : 'month'}</span>
                            {isYearly && (
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-3">-20%</span>
                            )}
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-medium mb-4">What's included</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Everything in Free
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Enigma AI
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Unlimited design generations
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Custom Themes
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    High-resolution exports
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Custom Extensions
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 bg-orange-500 border-2 border-black rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    Developer Tools
                                </li>
                            </ul>
                        </div>

                        <button className="mt-auto bg-[#3E1E14] hover:bg-[#946151fd] border-2 border-[#a1553d] shadow-[1px_5px_40px_6px_#743a28] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                            Subscribe →
                        </button>
                    </div>

                   
                    <div className="bg-[#1B1B1C] h-[500px] text-white rounded-xl p-8 flex flex-col -translate-x-6">
                        <h3 className="text-xl font-semibold mb-4">Team</h3>
                        <p className="text-gray-300 text-sm mb-6">
                            Everything you need to supercharge your productivity.
                        </p>

                        <div className="mb-8">
                            <span className="text-4xl font-bold">${pricingPlans.team[isYearly ? 'yearly' : 'monthly']}</span>
                            <span className="text-gray-400 ml-2">/ {isYearly ? 'year' : 'month'}</span>
                            {isYearly && (
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-3">-20%</span>
                            )}
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-medium mb-4">What's included</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Everything in Free
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Unlimited Shared Commands
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Unlimited Shared Quicklinks
                                </li>
                                <li className="flex items-center text-sm">
                                    <div className="w-6 h-6 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    Priority support
                                </li>
                            </ul>
                        </div>

                        <button className="mt-auto bg-[#3E1E14] border-2 border-[#a1553d] hover:bg-[#946151fd] shadow-[1px_5px_40px_6px_#743a28] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                            Subscribe →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCards;