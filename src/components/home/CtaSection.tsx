import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="bg-deep-blue dark:bg-[#0a0a0a] py-20 w-full border-t border-transparent dark:border-neutral-900 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    혼자 고민하지 마세요.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                    어떠한 문제도 한국공인탐정협회와 함께라면 현명하게 풀어나갈 수 있습니다. <br className="hidden md:block" />
                    지금 바로 전화나 온라인으로 무료 상담을 받아보세요.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-deep-blue rounded-md font-bold text-lg hover:bg-silver transition-all duration-300 text-center"
                    >
                        온라인 무료 상담
                    </Link>
                    <div className="flex items-center gap-3 text-white px-8 py-4 bg-white/10 rounded-md border border-white/20 w-full sm:w-auto justify-center">
                        <PhoneCall size={24} className="text-silver" />
                        <span className="text-xl font-bold tracking-wider">1111-2222</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
