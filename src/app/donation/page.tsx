'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, ShieldCheck, HeartHandshake, Users, ArrowRight } from 'lucide-react';
import { campaignCategories, campaigns } from '../data/campaigns';

export default function DonationPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filteredCampaigns = campaigns.filter((item) => {
    const matchesSearch =
      !search.trim() ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      item.story.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === 'All' ||
      item.category === filter ||
      (filter === 'Urgent' && item.urgency === 'Urgent');

    return matchesSearch && matchesFilter;
  });

  const featuredCampaigns = filteredCampaigns.filter((item) => item.featured).slice(0, 2);

  const formatAmount = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);

  const progressFor = (campaign: (typeof campaigns)[number]) =>
    Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100));

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(22,131,106,0.10),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(31,77,90,0.10),_transparent_36%)]" />
          <div className="relative grid gap-8 px-5 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-10">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                <HeartHandshake size={14} /> Campaigns with clear impact
              </div>
              <div className="space-y-3">
                <h1 className="max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Browse fundraisers with a calmer, lighter, trust-first layout.
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  Discover medical and community campaigns, compare progress, and support the causes that need attention right now.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Verified</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Campaigns with trust cues</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <Users size={18} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Community</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Built for easy scanning</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                    <ArrowRight size={18} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Fast donate</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Direct paths to each story</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <Search size={18} className="text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search campaigns"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                {campaignCategories.concat('Urgent').map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      filter === item
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Open</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{campaigns.length}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Featured</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{campaigns.filter((item) => item.featured).length}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Urgent</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{campaigns.filter((item) => item.urgency === 'Urgent').length}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {featuredCampaigns.length > 0 && (
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Featured fundraisers</p>
                <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">High-priority stories with strong progress signals</h2>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredCampaigns.map((item) => {
                const progress = progressFor(item);

                return (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.07)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.10)]"
                  >
                    <div className="grid gap-0 md:grid-cols-[1fr_1.05fr]">
                      <div className="relative min-h-[240px]">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4 flex gap-2">
                          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
                            {item.category}
                          </span>
                          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                            {item.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.daysLeft} days left</p>
                          <p className="mt-1 text-lg font-black text-slate-900">{item.title}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.category}</p>
                            <h3 className="mt-1 text-xl font-black leading-tight text-slate-900">{item.title}</h3>
                          </div>
                          {item.verified && (
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                              Verified
                            </span>
                          )}
                        </div>

                        <p className="text-sm leading-6 text-slate-600">{item.shortDescription}</p>

                        <div>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-bold text-slate-900">{formatAmount(item.raisedAmount)} raised</span>
                            <span className="font-semibold text-slate-500">{progress}% funded</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100">
                            <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${progress}%` }} />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Goal</p>
                            <p className="mt-1 text-sm font-black text-slate-900">{formatAmount(item.goalAmount)}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Supporters</p>
                            <p className="mt-1 text-sm font-black text-slate-900">{item.supporters}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Time left</p>
                            <p className="mt-1 text-sm font-black text-slate-900">{item.daysLeft}d</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.impactPoints.slice(0, 3).map((point) => (
                            <span key={point} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                              {point}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto flex gap-3">
                          <button
                            onClick={() => router.push(`/donation/${item.id}`)}
                            className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                          >
                            View campaign
                          </button>
                          <Link
                            href={`/donation/${item.id}`}
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                          >
                            Donate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">All campaigns</p>
              <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">Every active fundraiser in one place</h2>
            </div>
            <p className="text-sm font-medium text-slate-500">{filteredCampaigns.length} results</p>
          </div>

          {filteredCampaigns.length === 0 ? (
            <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">No campaigns match that filter.</p>
              <p className="mt-2 text-sm text-slate-500">Clear the search or switch back to a broader category.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCampaigns.map((item) => {
                const progress = progressFor(item);

                return (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.1)]"
                  >
                    <div className="relative h-52">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 flex gap-2">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm">
                          {item.category}
                        </span>
                        <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-600 shadow-sm">
                        {item.daysLeft} days left
                      </div>
                    </div>

                    <div className="space-y-4 p-5">
                      <div>
                        <h3 className="text-lg font-black leading-tight text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-bold text-slate-900">{formatAmount(item.raisedAmount)} raised</span>
                          <span className="font-semibold text-slate-500">{progress}% funded</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${progress}%` }} />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Goal {formatAmount(item.goalAmount)}</span>
                          <span>{item.supporters} supporters</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => router.push(`/donation/${item.id}`)}
                          className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                        >
                          Open story
                        </button>
                        <button
                          onClick={() => router.push(`/donation/${item.id}`)}
                          className="rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                        >
                          Donate
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
