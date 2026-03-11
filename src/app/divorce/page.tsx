import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Scale, FileSearch } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function DivorcePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2000&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        이혼상담사
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        가정의 위기를 진단하고 법률적, 심리적 해결책을 제시하는 조력자<br className="hidden md:block"/>
                        경찰청 사단법인 대한공인탐정연구협회 인증 자격
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section 1: Business Fields */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center justify-center gap-2">
                            <HeartHandshake size={18} /> Consulting Duties
                        </h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            이혼상담사의 핵심 업무
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                            단순한 법률 지식을 넘어, 내담자의 심리적 고통을 분담하고 이혼 소송 과정에서 발생할 수 있는 자녀 양육, 재산 분할, 증거 수집 등의 현실적인 방안을 체계적으로 돕습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-white dark:bg-black rounded-full flex items-center justify-center shadow-sm mb-6">
                                <ShieldCheck className="text-deep-blue dark:text-silver" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">원인 해소 및 심리 상담</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                각종 이혼 사유를 심층 분석하여 갈등 해소 방안을 모색하고, 심리 상담을 통해 이혼을 사전에 방지하는 1차적 중재 역할을 수행합니다.
                            </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-white dark:bg-black rounded-full flex items-center justify-center shadow-sm mb-6">
                                <Scale className="text-deep-blue dark:text-silver" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">자녀 양육 및 합의 조율</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                이혼 시 가장 첨예하게 대립하는 미성년 자녀의 친권, 양육권, 면접 교섭권 및 양육비 부담 문제에 대한 현실적이고 객관적인 대안을 제시합니다.
                            </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-white dark:bg-black rounded-full flex items-center justify-center shadow-sm mb-6">
                                <FileSearch className="text-deep-blue dark:text-silver" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">소송 전 증거수집 자문</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                불가피한 소송을 대비해 변호사 조력 이전에 합법적으로 필요한 재판용 증거 자료 수집 가이드를 제공하고 이혼 후의 홀로서기를 돕습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">아픈 마음을 어루만지고 새로운 시작을 돕는 전문가</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        만 18세 이상이면 누구나 응시 가능합니다. 한국자격관리협회가 주관하는 공신력 있는 자격증에 도전하십시오.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-deep-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-silver transition-transform hover:-translate-y-1"
                    >
                        시험 일정 안내받기
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
