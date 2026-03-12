"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const [images] = useState<string[]>([
        "/PIA/images/hero_bg_01.png",
        "/PIA/images/hero_bg_02.png",
        "/PIA/images/hero_bg_03.png",
        "/PIA/images/hero_bg_04.png",
        "/PIA/images/hero_bg_05.png",
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); // 8초마다 배경 교체

        return () => clearInterval(interval);
    }, [images]);

    return (
        <section className="relative w-full overflow-hidden bg-deep-blue">
            {/* Background Image Setup */}
            <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000"></div>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat ease-in-out ${
                        index === currentIndex ? "opacity-100 scale-105 animate-kenburns" : "opacity-0 scale-100"
                    }`}
                    style={{ backgroundImage: `url("${src}")`, transition: "opacity 2s ease-in-out" }}
                ></div>
            ))}

            <div className="relative z-20 container mx-auto px-4 lg:px-8 h-[600px] md:h-[700px] flex flex-col justify-center">
                <div className="max-w-3xl animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-silver text-sm font-medium mb-6 backdrop-blur-sm">
                        대한민국 1등 공인탐정 양성기관
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        진실을 향한<br />
                        <span className="text-silver">완벽한 추적</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                        신뢰할 수 있는 전문성과 체계적인 시스템으로<br className="hidden md:block" />
                        의뢰인의 권리 보호와 진실 규명에 앞장섭니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 bg-white text-deep-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-silver transition-all duration-300"
                        >
                            무료 상담 신청하기
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/pia"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            PIA 자격증 알아보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
