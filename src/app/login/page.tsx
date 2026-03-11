"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // 실제 연동 전까지 Mock Alert 처리
        if (email && password) {
            alert(`환영합니다! ${email}님.\n(현재는 데모 상태입니다.)`);
            window.location.href = "/";
        } else {
            alert("이메일과 비밀번호를 모두 입력해 주세요.");
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <ArrowLeft size={20} className="mr-2" />홈으로 돌아가기
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <Image 
                        src="/PIA_Logo.png" 
                        alt="PIA Logo" 
                        width={64} 
                        height={64} 
                        className="drop-shadow-md"
                    />
                </div>
                <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    한국공인탐정협회 로그인
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    아직 회원이 아니신가요?{" "}
                    <Link href="/signup" className="font-medium text-deep-blue hover:text-blue-800 dark:text-silver dark:hover:text-white transition-colors">
                        무료 회원가입
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-[#0a0a0a] py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100 dark:border-neutral-800">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                이메일 주소
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="focus:ring-deep-blue focus:border-deep-blue dark:focus:ring-silver dark:focus:border-silver block w-full pl-10 sm:text-sm border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-md py-3 transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                비밀번호
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="focus:ring-deep-blue focus:border-deep-blue dark:focus:ring-silver dark:focus:border-silver block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-md py-3 transition-colors"
                                    placeholder="••••••••"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-deep-blue focus:ring-deep-blue border-gray-300 rounded dark:bg-neutral-900 dark:border-neutral-700"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    로그인 상태 유지
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-deep-blue hover:text-blue-800 dark:text-silver dark:hover:text-white transition-colors">
                                    비밀번호를 잊으셨나요?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-deep-blue hover:bg-[#0a1e40] dark:bg-silver dark:text-deep-blue dark:hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue transition-colors"
                            >
                                로그인
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-neutral-800" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-[#0a0a0a] text-gray-500">
                                    회원이 아니신가요?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/signup"
                                className="w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-neutral-900 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                                이메일로 가입하기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
