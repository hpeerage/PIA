"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "협회 안내", href: "/about" },
        { name: "PIA 탐정사", href: "/pia" },
        { name: "탐정 서비스", href: "/service" },
        { name: "전국 탐정 찾기", href: "/find" },
        { name: "정보센터", href: "/info" },
        { name: "상담/신고", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-deep-blue dark:bg-[#0a0a0a] text-white shadow-md border-b border-transparent dark:border-neutral-900 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo Main */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image 
                            src="/PIA/PIA_Logo.png" 
                            alt="한국공인탐정협회 PIA 로고" 
                            width={48} 
                            height={48} 
                            priority
                            className="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm" 
                        />
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold tracking-tight leading-tight">
                                한국공인탐정협회
                            </span>
                            <span className="block text-[10px] md:text-xs font-normal text-silver mt-0.5 tracking-widest uppercase">
                                World Spia
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[15px] font-medium hover:text-silver hover:-translate-y-0.5 transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-6">
                            <Link 
                                href="/login" 
                                className="text-[14px] font-medium text-white/90 hover:text-white transition-colors"
                            >
                                로그인
                            </Link>
                            <Link 
                                href="/signup" 
                                className="text-[14px] font-medium bg-white text-deep-blue px-4 py-2 rounded-full hover:bg-silver transition-colors"
                            >
                                회원가입
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -mr-2 text-white hover:text-black hover:bg-white rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="메뉴 열기/닫기"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-deep-blue border-t border-white/10 absolute w-full shadow-lg">
                    <nav className="flex flex-col px-4 pt-2 pb-6 gap-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-silver block px-2 py-3 text-base font-medium border-b border-white/5 last:border-0"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-6 px-2">
                            <Link 
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex-1 text-center py-3 border border-white/30 rounded-md text-white font-medium"
                            >
                                로그인
                            </Link>
                            <Link 
                                href="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex-1 text-center py-3 bg-white text-deep-blue rounded-md font-bold"
                            >
                                회원가입
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
