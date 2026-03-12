import Link from "next/link";
import { ArrowRight, Crosshair, Shield, UserCheck } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function BodyguardPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("/PIA/images/hero_bg_04.png")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        특수경호사 (PSG)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        요인의 생명과 안전을 책임지는 대한민국 최정예 시큐리티 마스터<br className="hidden md:block"/>
                        체계적인 무술과 전술 훈련이 집약된 고도의 전문 요원
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section: Duty list */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-full h-[500px] bg-slate-100 dark:bg-neutral-900 rounded-2xl overflow-hidden relative group shadow-md border border-gray-100 dark:border-neutral-800">
                                <img src="/PIA/images/bodyguard_training.jpg" alt="경호 요원 훈련 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                    <h4 className="font-bold text-2xl flex items-center gap-2 mb-2"><Shield size={24}/> Private Security Guard</h4>
                                    <p className="text-gray-300">최첨단 장비와 무술을 결합한 민간 보안의 최고봉</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <Crosshair size={18} /> PSG Missions
                                </h2>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                    특수경호사(PSG)의 활동 무대
                                </h3>
                                
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-gray-100 dark:bg-neutral-800 p-2 rounded-lg text-deep-blue dark:text-silver shrink-0">
                                            <UserCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">VIP 신변 보호 및 호위</h4>
                                            <p className="text-gray-600 dark:text-gray-400">정재계 인사, 연예인 등 위해를 받을 우려가 있는 특정 요인의 국내외 이동 시 완벽한 신변 보호 업무를 수행합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-gray-100 dark:bg-neutral-800 p-2 rounded-lg text-deep-blue dark:text-silver shrink-0">
                                            <Shield size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">대규모 행사 보안 통제</h4>
                                            <p className="text-gray-600 dark:text-gray-400">국제 컨벤션, 콘서트, 스포츠 경기 등 인파가 운집하는 핵심 행사장 내외곽의 동선 통제 및 테러 방지 임무를 총괄합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-gray-100 dark:bg-neutral-800 p-2 rounded-lg text-deep-blue dark:text-silver shrink-0">
                                            <Crosshair size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">주요 시설물 방호 및 특수 호송</h4>
                                            <p className="text-gray-600 dark:text-gray-400">국가 중요 시설, 연구소 등 보안 1등급 구역을 방호하고 고가의 귀금속, 현금 등 중요 물품을 목적지까지 무사히 호송합니다.</p>
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
                    <h2 className="text-3xl font-bold text-white mb-6">스스로를 지키고 타인의 방패가 되는 길</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        다양한 경호 실무와 위기 대처 전술 교육을 통해 인정받는 엘리트 특수 경호 요원으로 거듭나십시오.
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
