import { Star, Users, ShieldCheck, Headphones, BarChart3, ArrowRight } from 'lucide-react';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Booking.com_Logo.svg/512px-Booking.com_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Expedia_2021.svg/512px-Expedia_2021.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tripadvisor_Logo_circle-green_horizontal-lockup_registered_RGB.svg/512px-Tripadvisor_Logo_circle-green_horizontal-lockup_registered_RGB.svg.png',
];

export default function FooterSection() {
  return (
    <section className="bg-white">
      {/* Testimonials / Logos */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-teal-600">Trusted by suppliers worldwide</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Real results, real support</h3>
            <blockquote className="mt-5 rounded-2xl bg-slate-50 p-6 text-slate-700 ring-1 ring-slate-200">
              “Tripezy helped us fill weekday tours and manage last-minute bookings without stress. Our visibility and revenue both grew within the first month.”
              <div className="mt-3 text-sm text-slate-500">— Maria G., Eco Tours Operator</div>
            </blockquote>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {logos.map((src) => (
                <div key={src} className="flex items-center justify-center rounded-lg bg-white p-3 ring-1 ring-slate-200">
                  <img src={src} alt="Partner logo" className="h-8 object-contain opacity-70" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Feature icon={Users} title="Verified profiles" desc="Build trust with verified business details and reviews." />
            <Feature icon={ShieldCheck} title="Secure payments" desc="Protected transactions and on-time payouts." />
            <Feature icon={Headphones} title="Dedicated support" desc="Human support available when you need it." />
            <Feature icon={BarChart3} title="Actionable analytics" desc="Understand demand and optimize pricing." />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="join" className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-sky-500 to-cyan-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white ring-1 ring-white/25">
            <Star className="h-3.5 w-3.5" />
            It’s free to get started
          </div>
          <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Join Tripezy Today</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">Start growing your business with us. Sign up in minutes, list your services, and get discovered by travelers worldwide.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-teal-700 shadow-md transition hover:translate-y-[-1px]">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#how-it-works" className="rounded-full bg-white/15 px-5 py-3 font-medium text-white ring-1 ring-white/25 transition hover:bg-white/20">Learn More</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Tripezy</h4>
              <p className="mt-3 text-sm text-slate-400">A modern marketplace for travel suppliers to reach more customers and manage bookings with ease.</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">Company</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">Support</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">Connect</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>Email: suppliers@tripezy.com</li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Tripezy. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="mb-3 inline-flex rounded-xl bg-teal-500/10 p-3 text-teal-700">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
