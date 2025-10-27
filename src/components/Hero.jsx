import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
            Supplier Program
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Grow Your Business with Tripezy
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/90">
            Join our global travel marketplace and reach thousands of travelers looking for unique stays and experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-sky-500 px-6 py-3 text-white shadow-lg shadow-teal-500/30 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Become a Supplier
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-3 text-teal-700 backdrop-blur transition hover:bg-white"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-none absolute right-6 top-28 hidden max-w-md rounded-2xl bg-white/90 p-4 shadow-2xl backdrop-blur md:block lg:right-12 lg:top-36"
        >
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="rounded-lg bg-teal-50 p-3">
              <p className="font-semibold text-teal-800">+12k</p>
              <p>Bookings managed</p>
            </div>
            <div className="rounded-lg bg-rose-50 p-3">
              <p className="font-semibold text-rose-700">42%</p>
              <p>Avg. visibility boost</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-3">
              <p className="font-semibold text-sky-700">24/7</p>
              <p>Dedicated support</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-3">
              <p className="font-semibold text-indigo-700">Global</p>
              <p>Traveler audience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
