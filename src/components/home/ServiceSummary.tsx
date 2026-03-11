import { ShieldCheck, Search, FileText, Globe } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Search size={32} className="text-deep-blue dark:text-silver mb-4" />,
        title: "민간조사(공인탐정) 서비스",
        description: "개인 및 기업의 당면한 문제와 분쟁을 신속하고 합법적으로 조사하여 진실을 밝힙니다.",
        link: "/service",
    },
    {
        icon: <ShieldCheck size={32} className="text-deep-blue dark:text-silver mb-4" />,
        title: "PIA 자격증 취득 교육",
        description: "체계적인 이론과 실무 중심의 교육을 통해 국내 최고의 공인탐정을 양성합니다.",
        link: "/pia",
    },
    {
        icon: <Globe size={32} className="text-deep-blue dark:text-silver mb-4" />,
        title: "국제 조사 업무",
        description: "해외 지부와의 긴밀한 네트워크를 바탕으로 국경을 넘나드는 조사를 지원합니다.",
        link: "/service",
    },
    {
        icon: <FileText size={32} className="text-deep-blue dark:text-silver mb-4" />,
        title: "법률 및 증거 수집",
        description: "재판 및 소송에 필요한 결정적 증거 자료를 합법적인 테두리 안에서 수집합니다.",
        link: "/info",
    },
];

export default function ServiceSummary() {
    return (
        <section className="py-24 bg-silver/20 dark:bg-black w-full relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-deep-blue dark:text-silver uppercase tracking-widest mb-2">Our Services</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        전문 탐정의 검증된 문제해결 역량
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        도움이 필요한 순간, 한국공인탐정협회가 함께합니다. 최고의 전문가들이 정확하고 신속하게 대응합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-[#111111] rounded-2xl p-8 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {service.icon}
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-deep-blue dark:group-hover:text-silver transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center text-sm font-bold text-deep-blue dark:text-silver hover:text-charcoal dark:hover:text-white transition-colors group/link"
                            >
                                자세히 보기
                                <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
