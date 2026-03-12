import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-charcoal dark:bg-black text-silver pt-16 pb-8 border-t border-gray-800 dark:border-neutral-900 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/PIA/PIA_Logo.png" alt="PIA 로고" width={40} height={40} className="w-10 h-10 drop-shadow-sm" />
                            <h2 className="text-white text-xl font-bold">한국공인탐정협회</h2>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm mb-6 text-gray-400">
                            1999년 설립이후 자격기본법에 의거하여 PIA민간조사(공인탐정) 자격취득자를 양성하고, 관련 학술연구 및 제도를 앞장서 이끄는 대한민국 대표 탐정기관입니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">협회 안내</Link></li>
                            <li><Link href="/pia" className="hover:text-white transition-colors">자격증 안내</Link></li>
                            <li><Link href="/service" className="hover:text-white transition-colors">탐정 서비스</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">상담 및 문의</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>전화: 1111-2222</li>
                            <li>이메일: info@kpiea.kr</li>
                            <li>주소: 서울특별시 종로구 종로 111, 2층 PIA 빌딩</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© {new Date().getFullYear()} Korea Private Investigation Association. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white">개인정보처리방침</Link>
                        <Link href="/terms" className="hover:text-white">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
