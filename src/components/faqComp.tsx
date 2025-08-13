import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface OpenItems {
    [key: number]: boolean;
}

const FAQComponent = () => {
    const [openItems, setOpenItems] = useState<OpenItems>({});

    const toggleItem = (index: number): void => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData: FAQItem[] = [
        {
            question: "What is this platform used for?",
            answer: "It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use."
        },
        {
            question: "What happens if I hit my free generation limit?",
            answer: "Once you reach your free generation limit, you'll need to upgrade to a paid plan to continue generating content. You can view your usage and upgrade options in your account settings."
        },
        {
            question: "Do I need design experience to use it?",
            answer: "No design experience is required! Our AI assistant is built to be intuitive and user-friendly, guiding you through the creative process regardless of your skill level."
        },
        {
            question: "Can I collaborate with my team?",
            answer: "Yes, our platform supports team collaboration features including shared workspaces, project sharing, and real-time editing capabilities with your teammates."
        },
        {
            question: "Is it really free to use?",
            answer: "Yes, we offer a generous free tier with limited generations per month. For unlimited access and premium features, you can upgrade to one of our paid plans."
        }
    ];

    return (
        <div className="min-h-screen z-[50] bg-transparent p-8 font-modernist">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Frequently Asked
                        <br />
                        Questions
                    </h1>
                    <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
                        Got questions? We've got answers. Find everything you need to know about using our platform, plans, and features.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black/20 border-b-2 border-b-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-black/30"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-white font-medium text-sm pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-white/60 transition-transform duration-200 flex-shrink-0 ${openItems[index] ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openItems[index] ? 'max-h-96 pb-5' : 'max-h-0'
                                }`}>
                                <div className="px-6">
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;