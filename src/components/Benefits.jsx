import { Globe, Calendar, BarChart3, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Reach More Travelers Worldwide',
    desc: 'Tap into a growing global audience searching for unique stays, tours, and activities.',
    icon: Globe,
    color: 'bg-sky-500/10 text-sky-700',
  },
  {
    title: 'Manage Bookings Seamlessly',
    desc: 'Centralize availability, schedules, and reservations with an intuitive dashboard.',
    icon: Calendar,
    color: 'bg-teal-500/10 text-teal-700',
  },
  {
    title: 'Boost Visibility with Smart Marketing',
    desc: 'Leverage SEO, campaigns, and featured placements to stand out where it counts.',
    icon: BarChart3,
    color: 'bg-amber-500/10 text-amber-700',
  },
  {
    title: 'Get Paid Securely & On Time',
    desc: 'Reliable payouts with transparent fees and fraud protection built in.',
    icon: ShieldCheck,
    color: 'bg-emerald-500/10 text-emerald-700',
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Partner with Tripezy</h2>
          <p className="mt-4 text-slate-600">Tools and exposure designed to help you grow revenue and run your operations smoothly.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className={`mb-4 inline-flex rounded-xl p-3 ${b.color}`}>
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-24 bg-gradient-to-t from-sky-50 to-transparent" />
    </section>
  );
}
