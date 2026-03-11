"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "PIA탐정사", href: "/pia" },
        { name: "국제특수명탐정(ISD)", href: "/isd" },
        { name: "비즈니스로비매니저", href: "/lobby" },
        { name: "도감청탐색사", href: "/wiretap" },
        { name: "범죄심리상담사", href: "/crime-psychology" },
        { name: "이혼상담사", href: "/divorce" },
        { name: "특수경호사", href: "/bodyguard" },
        { name: "경호사격마스타", href: "/shooting" },
    ];

    return (
        <div className="sticky top-20 z-40 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-neutral-800 shadow-sm">
            <div className="container mx-auto">
                <div className="overflow-x-auto px-4 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <ul className="flex items-center lg:justify-center space-x-6 h-14 md:h-16 text-sm md:text-base font-medium w-max mx-auto md:w-auto md:min-w-max">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className="h-full shrink-0">
                                    <Link 
                                        href={item.href} 
                                        className={`h-full flex items-center border-b-2 transition-colors whitespace-nowrap px-1 ${
                                            isActive 
                                            ? "text-deep-blue dark:text-silver border-deep-blue dark:border-silver font-bold" 
                                            : "text-gray-500 hover:text-gray-900 dark:hover:text-white border-transparent"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
