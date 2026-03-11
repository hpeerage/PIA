"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!agreeTerms) {
            alert("서비스 이용약관 및 개인정보 처리방침에 동의해 주세요.");
            return;
        }

        if (name && email && password) {
            alert(`가입 신청이 완료되었습니다! ${name}님.\n(현재는 데모 상태이므로 로그인 창으로 이동합니다.)`);
            window.location.href = "/login";
        } else {
            alert("모든 필수 정보를 입력해 주세요.");
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
                    계정 만들기
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    이미 계정이 있으신가요?{" "}
                    <Link href="/login" className="font-medium text-deep-blue hover:text-blue-800 dark:text-silver dark:hover:text-white transition-colors">
                        로그인하기
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-[#0a0a0a] py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100 dark:border-neutral-800">
                    <form className="space-y-6" onSubmit={handleSignup}>
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                이름 (실명) <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="focus:ring-deep-blue focus:border-deep-blue dark:focus:ring-silver dark:focus:border-silver block w-full pl-10 sm:text-sm border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-md py-3 transition-colors"
                                    placeholder="홍길동"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                이메일 주소 <span className="text-red-500">*</span>
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

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                비밀번호 <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="focus:ring-deep-blue focus:border-deep-blue dark:focus:ring-silver dark:focus:border-silver block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-md py-3 transition-colors"
                                    placeholder="8자 이상 문자, 숫자 포함"
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

                        {/* Terms Checkbox */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="h-4 w-4 text-deep-blue focus:ring-deep-blue border-gray-300 rounded dark:bg-neutral-900 dark:border-neutral-700"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                                    필수 약관 동의
                                </label>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                    <a href="#" className="underline">서비스 이용약관</a> 및 <a href="#" className="underline">개인정보 처리방침</a>에 동의합니다.
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-deep-blue hover:bg-[#0a1e40] dark:bg-silver dark:text-deep-blue dark:hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue transition-colors items-center gap-2"
                            >
                                <ShieldCheck size={18} />
                                회원가입 완료
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
