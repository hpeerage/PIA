import Link from "next/link";
import { ArrowRight, Briefcase, Handshake, TrendingUp } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function LobbyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("/images/hero_bg_03.png")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        비즈니스로비매니저 (BLM)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        기업과 기관 간의 합법적 중재 및 협상 전문가<br className="hidden md:block"/>
                        성공적인 비즈니스를 이끄는 핵심 파트너
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section 1: Definition */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center justify-center gap-2">
                            <Briefcase size={18} /> Role & Outlook
                        </h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            비즈니스로비매니저(BLM)의 역할
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                            현대 비즈니스 환경에서 기업과 정부, 단체 간의 복잡한 이해관계를 합법적이고 투명하게 조율하는 전문 로비 매니저의 수요가 급증하고 있습니다. BLM 자격은 이러한 협상과 중재의 스킬을 공인받는 지표가 됩니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <div className="w-14 h-14 bg-white dark:bg-black rounded-xl flex items-center justify-center shadow-sm mb-6">
                                <Handshake className="text-deep-blue dark:text-silver" size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">주요 진출 분야</h4>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 대기업 및 다국적 기업 대외협력팀</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 정부/지자체 대상 B2G 영업 전문가</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> M&A 조율 및 투자 유치 자문 전문기업</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 각종 협회 및 이익 단체의 정책 대변인</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <div className="w-14 h-14 bg-white dark:bg-black rounded-xl flex items-center justify-center shadow-sm mb-6">
                                <TrendingUp className="text-deep-blue dark:text-silver" size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">향후 전망</h4>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 제도 변화와 정책 소통을 이끄는 전문 직군으로 부상</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 해외 진출 기업의 글로벌 스탠다드 로비스트 역할 수행</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 프리랜서 컨설턴트 및 전문 로비 펌 창업 수요 증가</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">성공적인 정책 조율과 협상의 달인이 되십시오</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        자격기본법에 근거한 체계적인 교육 과정을 통해, 대한민국 비즈니스 협상을 주도할 합법적이고 전문적인 역량을 키워드립니다.
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
