import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="absolute left-0 right-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-500 text-white font-bold">Tz</div>
            <span className="text-lg font-bold text-white drop-shadow">Tripezy</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/90 sm:flex">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#join" className="hover:text-white">Become a supplier</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <FooterSection />
      </main>
    </div>
  );
}
