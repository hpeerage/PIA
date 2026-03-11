import Link from "next/link";
import { ArrowRight, ShieldAlert, Cpu, Award, BookOpen } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function WiretapPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        도감청탐색사 (WIS)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        한국직업능력연구원 등록민간자격 (제2011-0254호)<br className="hidden md:block"/>
                        사생활과 기업비밀을 보호하는 정보 보안 핵심 전문가
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section: Info & Perks */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 교육과정 안내 */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <BookOpen size={18} /> Education Program
                                </h2>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">모집 및 교육과정 세부사항</h3>
                                <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 space-y-4 text-gray-700 dark:text-gray-300">
                                    <div className="flex gap-4 border-b border-gray-200 dark:border-neutral-800 pb-4">
                                        <strong className="min-w-[80px] text-gray-900 dark:text-gray-100">교육시간</strong>
                                        <span>금·토요일 총 14시간 집중 교육</span>
                                    </div>
                                    <div className="flex gap-4 border-b border-gray-200 dark:border-neutral-800 pb-4">
                                        <strong className="min-w-[80px] text-gray-900 dark:text-gray-100">검정과목</strong>
                                        <span>관련법규 / 도감청개론 / 전파,주파수 분석 / 장비실무</span>
                                    </div>
                                    <div className="flex gap-4 border-b border-gray-200 dark:border-neutral-800 pb-4">
                                        <strong className="min-w-[80px] text-gray-900 dark:text-gray-100">응시대상</strong>
                                        <span>만 18세 이상 누구나 (선착순 30명 마감)</span>
                                    </div>
                                    <div className="flex gap-4 pb-2">
                                        <strong className="min-w-[80px] text-gray-900 dark:text-gray-100">교육비용</strong>
                                        <span>50만원 (기존 PIA 회원 20% 할인 혜택)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 필요성 및 혜택 */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <ShieldAlert size={18} /> Necessity & Benefits
                                </h2>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">WIS 자격 취득자만의 특전</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors">
                                        <Award className="text-deep-blue dark:text-silver shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">협력단체 무도단증 승단 부여</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">태권도, 합기도, 특공무술 등 본 협회 협력단체의 단증 취득 기회 제공</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors">
                                        <Cpu className="text-deep-blue dark:text-silver shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">첨단 정보 보안전문가 대우</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">불법 도감청 위협이 급증함에 따라 사생활 및 기업비밀을 수호하는 10대 유망 직종 (보안업체, 대기업 수요 급증)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors">
                                        <BookOpen className="text-deep-blue dark:text-silver shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">학위 편입학 특별 장학지원</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">교육재단 산학협력 대학원 및 대학 편·입학 시 학점인정 및 특별 전형 혜택 부여</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">불법 도감청 방지를 위한 최고의 전문가 과정!</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        한국특수직능교육재단 주관 첨단 기기 탐색 실무를 통해 여러분의 특별한 경력을 설계해 보세요.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-deep-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-silver transition-transform hover:-translate-y-1"
                    >
                        교육 및 자격증 신청하기
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
