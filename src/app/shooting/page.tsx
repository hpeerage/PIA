import Link from "next/link";
import { ArrowRight, Crosshair, Target, Clock, AlertTriangle } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function ShootingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("/images/hero_bg_05.png")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        경호사격마스타
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        한국직업능력개발원 등록 (제2012-0237호)<br className="hidden md:block"/>
                        총기 안전의 이해와 고도의 사격 전술 능력을 갖춘 무도 전문가
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section: Detailed Info via Cards */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <Target size={48} className="mx-auto text-deep-blue dark:text-silver mb-6" />
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            교육 안내 및 자격 취득 과정
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            실제 총기를 다루는 고도의 훈련인 만큼 체계적인 이론 검증과 강도 높은 실무 평가를 통과한 소수의 30명에게만 뱃지가 부여됩니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 교육 일정 카드 */}
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-deep-blue dark:text-silver" size={28} />
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">교육 시간 및 장소</h4>
                            </div>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li className="flex flex-col border-b border-gray-200 dark:border-neutral-800 pb-3">
                                    <span className="text-sm text-gray-400 mb-1">총 이수 시간</span>
                                    <strong className="text-lg text-gray-900 dark:text-white">평일 4일 또는 주말 2주 연속 (총 24시간)</strong>
                                </li>
                                <li className="flex flex-col border-b border-gray-200 dark:border-neutral-800 pb-3">
                                    <span className="text-sm text-gray-400 mb-1">모집 인원 (상시접수)</span>
                                    <strong className="text-lg text-gray-900 dark:text-white">기수당 선착순 30명 마감</strong>
                                </li>
                                <li className="flex flex-col pb-1">
                                    <span className="text-sm text-gray-400 mb-1">교육 장소</span>
                                    <strong className="text-lg text-gray-900 dark:text-white">한국특수직능교육재단 종로교육장 및 지정 사격장</strong>
                                </li>
                            </ul>
                        </div>

                        {/* 커리큘럼 카드 */}
                        <div className="bg-slate-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="text-deep-blue dark:text-silver" size={28} />
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">필수 평가 항목</h4>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-neutral-800 flex justify-center items-center text-sm font-bold text-gray-900 dark:text-white shrink-0">1</div>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">사격 기본 이론 및 수칙</strong>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">총기의 구조 이해 작동 원리 및 격발 불량 시 조치 요령 등</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-neutral-800 flex justify-center items-center text-sm font-bold text-gray-900 dark:text-white shrink-0">2</div>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">위기 대처 안전 교육</strong>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">오발 방지를 위한 행동 수칙 및 실탄 통제 요령</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-deep-blue text-white flex justify-center items-center text-sm font-bold shrink-0">3</div>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">실탄 사격훈련 및 실무평가</strong>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">표적 사격, 기동 사격 실습 후 점수에 따른 엄격한 평가 진행</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-8 bg-gray-100 dark:bg-[#111111] rounded-xl p-6 text-center text-gray-600 dark:text-gray-400 text-sm">
                        * 교육비 48만원 (전형료, 실탄 실습비 및 교재 포함). 기존 PIA 정회원의 경우 가입 할인 혜택이 적용됩니다. 필요 서류: 주민등록초본, 신분증 지참.
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">백발백중의 실력, 완벽한 경호의 완성</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        자격 수료자는 본 협회와 연계된 특수 경호 업체 및 무장 보안 산업 분야 우선 취업 우대를 받으실 수 있습니다.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-deep-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-silver transition-transform hover:-translate-y-1"
                    >
                        모집 요강 확인 및 신청
                        <Crosshair size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
