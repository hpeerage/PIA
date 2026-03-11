import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, FileText, Briefcase, Award, Search, HandHeart } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function IsdPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                {/* 배경 이미지 자리표시자 (스카이라인/비즈니스 테마) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        국제특수명탐정 (ISD)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        경찰청/한국직업능력원 등록 전문자격증 (제2021-2351호)<br className="hidden md:block"/>
                        21세기 글로벌 시대에 발맞춘 지능형 범죄 대응 민간조사 전문가
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section 1: Definition & Necessity */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <div className="w-full h-[400px] bg-slate-100 dark:bg-neutral-900 rounded-2xl overflow-hidden relative group shadow-md border border-gray-100 dark:border-neutral-800">
                                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" alt="기업조사 전문가 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <Globe size={18} /> Definition
                                </h2>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    국제특수명탐정(ISD) 이란?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                    <strong className="text-gray-900 dark:text-gray-200">ISD (International Special Detective)</strong> 는 일상생활에서 발생하는 각종 민·형사상 사건 및 사고에 대하여 공권력이 미치지 못하는 부분을 <strong className="text-deep-blue dark:text-white font-semibold">법률이 허용하는 범위 내</strong>에서 정보 자료수집과 사실 확인을 수행하는 전문가입니다.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    현대 사회의 정보화에 따른 지능화·다양화된 충동 범죄에 대응하며, 개인과 기업의 권익 보호에 기여하는 민간조사 분야의 핵심 자격증입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <ShieldCheck size={18} /> Necessity & Outlook
                                </h2>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    필요성 및 21세기 전문직 전망
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                    OECD 국가 대부분(미국, 일본 등)에서는 이미 사립탐정 제도가 고소득 유망 직종으로 정착되어 국민의 사생활과 권위를 보호하고 있습니다. 우리나라도 지속적인 지능형 범죄 증가로 공권력의 한계를 보완할 민간조사원이 필수적인 상황입니다.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    ISD 자격증은 방대한 민간조사 업무 영역에 비해 턱없이 부족한 전문 인력 수요를 충족시키기 위해 마련된 제도로, 향후 국내외 취업 및 창업 시장에서 <strong className="text-gray-900 dark:text-gray-200 bg-silver/30 dark:bg-white/10 px-1">최첨단 유망 전문직</strong>으로 강력하게 대두되고 있습니다.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-[400px] bg-slate-100 dark:bg-neutral-900 rounded-2xl overflow-hidden relative group shadow-md border border-gray-100 dark:border-neutral-800">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" alt="글로벌 비즈니스 업무 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 2: Exam Syllabus (Cards) */}
            <section className="py-24 bg-silver/30 dark:bg-[#111111]">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <FileText size={48} className="mx-auto text-deep-blue dark:text-silver mb-8" />
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            자격시험 요강 안내
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            국제특수명탐정(ISD) 자격 시험은 총 2차에 걸쳐 실무와 학문적 소양을 종합적으로 평가합니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1차 시험 카드 */}
                        <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 text-deep-blue dark:text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">1차</div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">필기시험 (객관식)</h4>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 탐정학개론 (25문항)</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 범죄학 및 범죄심리 (25문항)</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 법학개론 (25문항)</li>
                            </ul>
                        </div>
                        {/* 2차 시험 카드 */}
                        <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 text-deep-blue dark:text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">2차</div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">실무시험 (주관식 포함)</h4>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 탐정관계법</li>
                                <li className="flex items-start gap-2"><span className="text-deep-blue dark:text-silver mt-1">•</span> 탐정조사실무</li>
                            </ul>
                        </div>
                        {/* 합격 기준 카드 */}
                        <div className="bg-deep-blue dark:bg-white text-white dark:text-deep-blue p-8 rounded-xl shadow-sm border border-transparent hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-white/20 dark:bg-deep-blue/10 rounded-lg flex items-center justify-center mb-6">
                                <Award size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-4">합격 기준</h4>
                            <ul className="space-y-3 text-white/90 dark:text-deep-blue/90">
                                <li className="flex items-start gap-2">✔ 각 과목별 40점 이상 득점</li>
                                <li className="flex items-start gap-2">✔ 전 과목 평균 60점 이상 득점</li>
                                <li className="flex items-start gap-2 mt-4 text-sm opacity-80">(절대평가 방식 적용)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 3: Data Table */}
            <section className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase">Career Fields</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">ISD 관련 주요 진출 및 업무역역</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            법률 탐정부터 사이버 명예훼손 조사까지, ISD 자격 취득자는 사회 전반에 걸친 다양한 문제 해결 전문가로 진출합니다.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-200 text-sm md:text-base">
                                    <th className="py-5 px-6 font-bold w-1/4 border-b border-gray-200 dark:border-neutral-800 whitespace-nowrap">업무 영역</th>
                                    <th className="py-5 px-6 font-bold w-1/2 border-b border-gray-200 dark:border-neutral-800">주요 수행 내용</th>
                                    <th className="py-5 px-6 font-bold w-1/4 border-b border-gray-200 dark:border-neutral-800 whitespace-nowrap">비고</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300 text-sm md:text-base divide-y divide-gray-100 dark:divide-neutral-800">
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-5 px-6 font-semibold flex items-center gap-3"><Briefcase className="text-deep-blue dark:text-silver" size={20}/>법률탐정업무</td>
                                    <td className="py-5 px-6 leading-relaxed">민·형사 소송 관련 증거 자료 수집, 재판 자료 수집 확인 지원, 이혼 및 가정 문제 조사 지원</td>
                                    <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">변호사 수임 및 연계업무 등</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-5 px-6 font-semibold flex items-center gap-3"><Globe className="text-deep-blue dark:text-silver" size={20}/>기업탐정업무</td>
                                    <td className="py-5 px-6 leading-relaxed">산업스파이 조사, 지식재산권 침해(가짜 상품, 불법 복제) 추적, 기업 비리/M&A 관련 단체 평판조사</td>
                                    <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">기업 감사실, 법무실 등 자체 위임업무</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-5 px-6 font-semibold flex items-center gap-3"><HandHeart className="text-deep-blue dark:text-silver" size={20}/>공익탐정업무</td>
                                    <td className="py-5 px-6 leading-relaxed">실종자 및 미아 가출인 찾기 조사, 국민 공중보건·환경·안전 등 기타 각종 사건 사고 공익침해행위 사실조사</td>
                                    <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">경찰 및 환경부, 보건복지부, 소방청, 산림청 등 유관기관 위임 연계</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-5 px-6 font-semibold flex items-center gap-3"><ShieldCheck className="text-deep-blue dark:text-silver" size={20}/>보험범죄조사업무</td>
                                    <td className="py-5 px-6 leading-relaxed">생명·손해보험 등 각종 고의 및 허위로 인한 보험사기 수법 사건사고 부당 적발 증거수집 자료조사 지원 업무</td>
                                    <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">국내외 각 보험회사 위임 수임</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-5 px-6 font-semibold flex items-center gap-3"><Search className="text-deep-blue dark:text-silver" size={20}/>사이버, 금융탐정업무</td>
                                    <td className="py-5 px-6 leading-relaxed">사이버 명예훼손, 보이스피싱, 스미싱, 개인정보 유출, 영업기밀 유출 사이버 해킹 조사 지원 분석, 신용정보회사, 외국인 관련 국제탐정 관련업무</td>
                                    <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">경찰기관 연계 및 개인 피해자 위임</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">글로벌 핵심 직종, 국제특수명탐정에 도전하세요!</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        자격기본법에 근거한 투명하고 체계화된 시험 평가와 교육 과정을 통해, 대한민국 최고의 공인탐정으로 거듭날 수 있습니다.
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
