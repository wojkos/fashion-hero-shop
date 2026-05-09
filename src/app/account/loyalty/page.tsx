"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Star, Zap } from "lucide-react";
import { useAuth } from "@/components/auth-provider";

const MOCK_POINTS = 271;

const mockTransactions = [
  { id: "tx-006", date: "May 7, 2026", description: "Return SF-10042", points: -59, levelDown: true },
  { id: "tx-005", date: "May 2, 2026", description: "Return SF-10038 (partial)", points: -20, levelDown: false },
  { id: "tx-004", date: "April 28, 2026", description: "Order SF-10042", points: 59 },
  { id: "tx-003", date: "March 15, 2026", description: "Order SF-10038", points: 94 },
  { id: "tx-002", date: "February 22, 2026", description: "Order SF-10031", points: 48 },
  { id: "tx-001", date: "January 8, 2026", description: "Welcome bonus", points: 149 },
];

export default function LoyaltyPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  }, [user, router]);

  if (!user) return null;

  const points = MOCK_POINTS;
  const level = Math.min(Math.floor(points / 100), 10);
  const discount = level;
  const progress = level === 10 ? 100 : points % 100;
  const isMaxLevel = level === 10;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-[11px] text-warm-gray mb-8 tracking-wide">
        <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/account" className="hover:text-charcoal transition-colors">Account</Link>
        <span className="mx-1.5">/</span>
        <span className="text-charcoal">HeroPoints</span>
      </nav>

      <h1 className="text-2xl font-light text-charcoal mb-8">HeroPoints</h1>

      {/* Hero Section */}
      <section className="mb-10 border border-black/10 rounded-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <Star className="w-4 h-4 text-warm-gray" strokeWidth={1.5} />
          <span className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray">
            Your Rewards
          </span>
        </div>

        <div className="flex items-end gap-6 mb-6">
          <div>
            <p className="text-5xl font-light text-charcoal leading-none">{points}</p>
            <p className="text-[12px] text-warm-gray mt-1">points</p>
          </div>
          <div className="flex gap-3 pb-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-charcoal text-white text-[11px] tracking-wide rounded-sm">
              Level {level}
            </span>
            {discount > 0 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 border border-black/20 text-charcoal text-[11px] tracking-wide rounded-sm">
                <Zap className="w-3 h-3" strokeWidth={1.5} />
                {discount}% discount
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="h-1 bg-black/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-charcoal rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-warm-gray mt-2">
            {isMaxLevel ? (
              "Max Level reached — enjoy 10% off every order"
            ) : (
              <>{progress} / 100 pts to Level {level + 1} ({level + 1}% discount)</>
            )}
          </p>
        </div>
      </section>

      {/* Points History */}
      <section className="mb-10">
        <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-4 pb-2 border-b border-black/10">
          Points History
        </h2>
        <div className="space-y-0">
          {mockTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between py-3 border-b border-black/5"
            >
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-medium text-charcoal">{tx.description}</p>
                  {"levelDown" in tx && tx.levelDown && (
                    <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] tracking-wide bg-red-50 text-red-600 border border-red-200 rounded-sm">
                      level down
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-warm-gray">{tx.date}</p>
              </div>
              <span className={`text-[12px] font-medium ${tx.points < 0 ? "text-red-600" : "text-green-700"}`}>
                {tx.points < 0 ? `${tx.points} pts` : `+${tx.points} pts`}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Link
        href="/account"
        className="text-[11px] text-warm-gray underline hover:text-charcoal transition-colors"
      >
        ← Back to Account
      </Link>
    </div>
  );
}
