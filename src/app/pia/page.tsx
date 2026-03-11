import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Award, FileSearch, Building2 } from "lucide-react";

import SubNav from "@/components/layout/SubNav";

export default function PiaPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            {/* Sub Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-blue">
                {/* 배경 이미지 자리표시자 (추후 images 폴더의 사진으로 연동 가능) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-black/50"></div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        자격증 안내
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        PIA 탐정사
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        세계공인탐정연맹! 국내 최대 탐정협의체!<br className="hidden md:block"/>
                        하나로! 세계로! 미래로! PIA탐정사관학교!
                    </p>
                </div>
            </div>

            <SubNav />

            {/* Content Section 1: Definition & Necessity */}
            <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <div className="w-full h-[400px] bg-slate-100 dark:bg-neutral-900 rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1200&auto=format&fit=crop" alt="탐정 조사 업무 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <ShieldAlert size={18} /> Definition
                                </h2>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    PIA (Private Investigation Administrator) 란?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                    <strong className="text-gray-900 dark:text-gray-200 bg-silver/30 dark:bg-white/10 px-1">"PIA탐정사"</strong>를 말하며 현 사회가 고도로 발전하여 정보화 시대로 급변함에 따라 생각지도 못한 충동 범죄가 다양화, 지능화, 광폭화되고 있는 현실에서 우리 일상생활에서 일어나는 각종 민·형사상 사건, 사고에 대하여 공권력이 미치지 못하는 부분을 <strong className="text-deep-blue dark:text-white font-semibold">현행 법률이 허용하는 범위</strong>에서 개인과 기업에 대한 정보, 자료수집, 사실확인 등 민간조사업무를 수행하는 전문가입니다.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    자격기본법(법률 제9190호) 17조에 의거 본 협회에서 시행하는 <strong className="text-gray-900 dark:text-gray-200">PIA탐정사 자격 취득자</strong>를 말합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase flex items-center gap-2">
                                    <CheckCircle2 size={18} /> Necessity
                                </h2>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    PIA탐정사의 필요성
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                    공권력이 미치지 못하는 부분을 법률이 허용하는 범위내에서 피해자들의 고통과 어려움을 도와줌으로써 국민복지 건설에 이바지 하고, OECD 국가 중 유일하게 민간조사제도가 마련되지 않은 우리나라는 외국업체의 국내 진출로 국민의 비밀과 재산을 외국인의 손에 맡기게 되는 안타까운 현실에 대비하기 위함입니다.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    학문과 실무능력을 갖춘 전문 인재를 양성하여 국내는 물론 외국에 진출시켜 국가의 위상제고 및 국가 경제에 기여 하고자 신설된 자격제도로서 한국직업능력연구원에 PIA탐정사 자격이 등록되어 사단법인 대한공인탐정연구협회의 자격검증 인증 평가를 거쳐 발행되고 있습니다.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-[400px] bg-slate-100 dark:bg-neutral-900 rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" alt="기업조사 및 전문인재 이미지" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 2: Prospect */}
            <section className="py-24 bg-silver/30 dark:bg-[#111111]">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <Award size={48} className="mx-auto text-deep-blue dark:text-silver mb-8" />
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        PIA탐정사의 대우 및 전망
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                        PIA탐정사는 21C 최첨단 유망 전문직으로 각종 사건 · 사고 조사는 물론 미제 사건에 대한 사실 확인 정보 자료수집 등 민간차원에서 전문 조사업무를 수행하며 현재 경찰기관의 한정된 경찰력의 부족으로 완벽한 실체적 진실발견에 한계가 있어 이를 사경비력으로 충족시켜 피해자들이 민 · 형사 및 행정적으로 완벽한 구제와 경찰력의 사각지대를 공경비력(PIA)으로 공동화하여야 하므로 PIA탐정사의 업무활동 및 영역이 광범위하게 넓어지고 있는 반면, <strong className="text-deep-blue dark:text-white font-semibold">현재 그 수요는 매우 부족하여 많은 인원의 확충이 요망</strong>되고 있습니다.
                    </p>
                </div>
            </section>

            {/* Content Section 3: Table */}
            <section className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-deep-blue dark:text-silver tracking-widest mb-3 uppercase">Career Fields</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">PIA탐정사의 업무 및 진출분야</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            현행 법률이 허용하는 범위내에서 민간조사 업무를 수행하며, 변호사의 수임을 의뢰받거나 기업 등 단체 기업이 필요한 정보탐색 사실확인 조사업무를 수행합니다.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-200 text-sm md:text-base">
                                    <th className="py-5 px-6 font-bold w-1/4 border-b border-gray-200 dark:border-neutral-800">업무 영역</th>
                                    <th className="py-5 px-6 font-bold w-1/2 border-b border-gray-200 dark:border-neutral-800">주요 수행 내용</th>
                                    <th className="py-5 px-6 font-bold w-1/4 border-b border-gray-200 dark:border-neutral-800">비고</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300 text-sm md:text-base divide-y divide-gray-100 dark:divide-neutral-800">
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-4 px-6 font-semibold flex items-center gap-2"><FileSearch size={18} className="text-deep-blue dark:text-silver"/> 조사업무</td>
                                    <td className="py-4 px-6 leading-relaxed">미제사건조사, 보험사기사건조사, 의료사고, 교통사고 조사, 국토개발에 따른 토지수용 조사, 기업비리 및 진단조사, 부동산 사건조사, 사이버범죄, 실종·가출인 찾기, 지적재산권, 법원소송에 따른 민·형사 사건 증거자료 수집</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">고문 변호사 수임</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">국제조사분야</td>
                                    <td className="py-4 px-6 leading-relaxed">산업스파이, 국제 미아 및 입양아, 유학생 피해사건, 국제무역 분쟁조사, 해외도피사범</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">-</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">탐지업무 분야</td>
                                    <td className="py-4 px-6 leading-relaxed">도·감청 탐지 확인, 몰래 카메라 탐지 업무, 거짓말 탐지 업무</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">장비업자 임대</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-4 px-6 font-semibold flex items-center gap-2"><ShieldAlert size={18} className="text-deep-blue dark:text-silver"/> 경호·경비업 분야</td>
                                    <td className="py-4 px-6 leading-relaxed">개인 경호 업무, 시설 경비 업무, 호송 차량 경호 업무</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">지방 경찰청 허가 협회 소속업</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="py-4 px-6 font-semibold flex items-center gap-2"><Building2 size={18} className="text-deep-blue dark:text-silver"/> 일반 행정업무</td>
                                    <td className="py-4 px-6 leading-relaxed">민원에 의한 행정절차 업무</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">법무사 행정사 연계업무</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-deep-blue dark:bg-black py-20 border-t border-transparent dark:border-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">차세대 유망 전문직, PIA 탐정사에 도전하세요!</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        최고의 전문가들이 체계적인 교육과 자격 인증 평가를 통해 여러분을 대한민국 최고의 공인탐정으로 양성합니다.
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
