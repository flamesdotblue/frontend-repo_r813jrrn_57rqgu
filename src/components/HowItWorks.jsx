import { CheckCircle, UserPlus, ClipboardList, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Sign Up',
    desc: 'Create your free supplier account in minutes with basic details.',
    icon: UserPlus,
  },
  {
    title: 'List Your Services',
    desc: 'Add your tours, stays, or experiences with pricing and availability.',
    icon: ClipboardList,
  },
  {
    title: 'Start Earning',
    desc: 'Go live, get bookings, and receive payouts directly via Tripezy.',
    icon: DollarSign,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-slate-600">A simple, guided setup to get your business in front of travelers.</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-teal-500/40 via-sky-500/40 to-emerald-500/40 sm:block" />

          <ol className="space-y-8">
            {steps.map((s, idx) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative grid grid-cols-[2rem,1fr] gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:grid-cols-[3rem,1fr]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white shadow-sm sm:h-12 sm:w-12">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 sm:inline-flex">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Step {idx + 1}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* infographic image */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2069&auto=format&fit=crop"
              alt="Suppliers managing bookings on dashboard"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
