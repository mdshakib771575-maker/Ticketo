
"use client";

import { useRouter } from "next/navigation";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-5 text-white">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#111113]/90 p-8 text-center shadow-2xl sm:p-12">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
          <ShieldAlert
            size={42}
            className="text-pink-400"
            strokeWidth={1.7}
          />
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-pink-400">
          Access Denied
        </p>

        <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
          403
        </h1>

        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
          Unauthorized Access
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-400 sm:text-base">
          Sorry! You don't have permission to access this page.
          Please go back and try again with the correct account.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600 active:scale-95"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition hover:bg-white/10 active:scale-95"
          >
            <Home size={18} />
            Home
          </button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="text-xs text-gray-500">
            Error Code: 403 · Ticketо Security
          </p>
        </div>
      </div>
    </main>
  );
}
