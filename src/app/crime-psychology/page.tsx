import Link from "next/link";
import { ArrowRight, Brain, Users, FileText } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function CrimePsychologyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        범죄심리상담사
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        범죄 이면의 동기를 분석하고 치유를 돕는 마음의 전문가<br className="hidden md:block"/>
                        한국자격관리협회 인증 핵심 심리상담 스페셜리스트
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section: Info */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <Brain size={48} className="mx-auto text-deep-blue dark:text-silver mb-8" />
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            응시 및 시험 안내
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            복잡해지는 현대 범죄 이면의 심리 상태를 과학적으로 분석하고, 가해자 혹은 피해자의 교정과 회복을 위해 활동하는 범죄심리상담 자격 과정입니다.
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-neutral-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <FileText size={180} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 dark:border-neutral-800 pb-6">
                                <h4 className="font-bold text-xl text-deep-blue dark:text-silver min-w-[120px]">주관 및 시행</h4>
                                <p className="text-gray-800 dark:text-gray-200 text-lg">한국자격관리협회 / 한국특수교육재단 주관<br/><span className="text-sm text-gray-500">(경찰청 사단법인 대한공인탐정연구협회 인증)</span></p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 dark:border-neutral-800 pb-6">
                                <h4 className="font-bold text-xl text-deep-blue dark:text-silver min-w-[120px]">응시 자격</h4>
                                <p className="text-gray-800 dark:text-gray-200 text-lg flex items-center gap-2">
                                    <Users size={20} className="text-gray-400"/>
                                    만 18세 이상 누구나 (성별, 학력, 경력 제한 없음)
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 pb-2">
                                <h4 className="font-bold text-xl text-deep-blue dark:text-silver min-w-[120px]">시험 일정</h4>
                                <p className="text-gray-800 dark:text-gray-200 text-lg">
                                    매년 전·후반기 1회씩 (총 2회 실시 예정)<br/>
                                    <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-md mt-2 inline-block">시행일 한달 전 공지</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">마음을 읽는 통찰력, 새로운 커리어를 개척하세요</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        심도있는 상담 기법과 범죄학 지식을 갖춘 사회적 리더로서의 자질을 양성합니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-deep-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-silver transition-transform hover:-translate-y-1"
                    >
                        상담 및 지원 세부사항 문의
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
