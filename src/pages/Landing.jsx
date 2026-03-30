import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="material-symbols-outlined !text-sm">auto_awesome</span>
            The Future of Travel Operations
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Powering Travel <br />
            <span className="vibgyor-text">Businesses with AI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 font-medium">
            ADREN — Adventure. Drift. Roam. Enjoy Your Nest. <br />
            The enterprise OS for high-growth travel agencies and tour operators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-extrabold saas-shadow hover:scale-105 transition-transform text-center">
              Request Early Access
            </Link>
            <Link to="/about" className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl text-lg font-extrabold hover:bg-gray-50 transition-colors text-center">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
            Trusted Global Inventory Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-bold text-xl text-gray-400 uppercase tracking-widest">Hotelbeds</span>
            <span className="font-bold text-xl text-gray-400 uppercase tracking-widest">Yalago</span>
            <span className="font-bold text-xl text-gray-400 uppercase tracking-widest">Stuba</span>
          </div>
          <p className="text-center mt-10 text-sm font-medium text-primary">
            Access to 1M+ hotels worldwide through a single API
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Enterprise-Grade Features</h2>
            <p className="text-gray-500 max-w-xl">Built for the demands of modern travel enterprises, combining speed, AI, and connectivity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Search - large */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-[#f8fafc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 saas-shadow">
                  <span className="material-symbols-outlined text-primary">travel_explore</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI-Assisted Hotel Search</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Our proprietary LLM understands complex natural language queries. Search "luxury beachfront villas in Bali with kid-friendly pools and high-speed Wi-Fi" and get instant results.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-400 mb-2">
                  <span className="material-symbols-outlined !text-sm">terminal</span>
                  <span>AI Query Processing...</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Dynamic Pricing */}
            <div className="p-8 rounded-2xl bg-primary text-white flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white">monitoring</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Smart Dynamic Pricing</h3>
                <p className="text-white/80 leading-relaxed">Automate margins and yields based on market demand, supplier rates, and customer profiles in real-time.</p>
              </div>
              <button className="mt-8 text-sm font-bold flex items-center gap-2 group">
                Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            {/* Agent Productivity */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="size-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 saas-shadow">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Agent Productivity</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Reduce manual entry by 80% with automated workflows and instant supplier sync.</p>
            </div>

            {/* Quick Itineraries - large */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="size-12 rounded-xl bg-[#f8fafc] dark:bg-gray-800 flex items-center justify-center mb-6 saas-shadow">
                  <span className="material-symbols-outlined text-primary">map</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Quick Itineraries</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Generate beautiful, white-labeled travel itineraries in seconds with AI-curated images and local insights.</p>
              </div>
              <div className="w-full md:w-64 aspect-[3/4] rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden relative saas-shadow">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj8eSIKa5yKm0GHOsus5m5U4LNMWwTySu4ZfA3YKRkV2glmTUepGBRyFpO7FTJlRf1pJ3ZWKeBxjw44F7nyoIoOwQnaQrmYVWNyH35HeqNDx3BAO6jc7k9vOdZOdfKLa08OzaAVllh-JWwLhu21YK7bgy-ozTeMC8DZEeQDYmkBGJnqfYwUwfl6noLjn1i8svrLluvJpBtlqteQZfg1JJbwLuzDr7B6JWdG8DQH2bdgp-mnw7q-ALJ5OT05SNCYtNfFFmP_wNBbns"
                  alt="Paris itinerary preview"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs font-bold uppercase">Ready in 2.4s</p>
                  <h4 className="text-white font-bold text-sm">7 Days in Paris &amp; Lyon</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold mb-16">The ADREN Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined !text-4xl text-primary">api</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Hotels API</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">RESTful API for direct integration with 500k+ global properties. Low latency, high availability, and 99.9% uptime.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> Instant Confirmation</li>
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> Multi-Currency Support</li>
              </ul>
            </div>
            <div className="group">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined !text-4xl text-primary">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Core Engine</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">Advanced machine learning models for itinerary generation, customer preference prediction, and smart routing.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> NLP Search Engine</li>
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> Automated Itinerary Builder</li>
              </ul>
            </div>
            <div className="group">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined !text-4xl text-primary">hub</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Travel CRM Suite</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">A CRM built specifically for travel agents. Manage leads, track history, and automate follow-ups with ease.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> Unified Customer Profile</li>
                <li className="flex items-center gap-2 text-sm text-gray-500"><span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> Multi-Channel Comms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why ADREN */}
      <section className="py-24 px-6 bg-[#111418] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8">Why leading travel companies choose ADREN.</h2>
            <div className="space-y-8">
              {[
                { icon: "architecture", title: "AI-First Infrastructure", desc: "We don't just add AI features; our entire stack is built on an AI core for maximum efficiency." },
                { icon: "public", title: "Unrivaled Global Supply", desc: "Direct connections to major wholesalers and boutique providers globally, ensuring best rates." },
                { icon: "security", title: "Enterprise Security", desc: "PCI-DSS Level 1 compliance and SOC2 certified operations to keep your business safe." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "12ms", label: "API Response" },
              { value: "500k+", label: "Hotels" },
              { value: "10+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                <h5 className="text-4xl font-black mb-2">{stat.value}</h5>
                <p className="text-gray-500 text-xs font-bold uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-12 items-center saas-shadow">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 saas-shadow rotate-3">
              <img
                className="w-full h-full object-cover"
                src="src/assets/Ankit_Prasad_Founder.jpeg"
                alt="Ankit Prasad, Founder & CEO"
              />
            </div>
            <div>
              <span className="material-symbols-outlined text-primary !text-4xl mb-4">format_quote</span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-[#111418] dark:text-gray-200">
                "At ADREN, we believe travel technology shouldn't just be functional—it should be intelligent. We're building the future where AI handles the logistics, so humans can focus on the adventure."
              </p>
              <div>
                <h4 className="text-xl font-extrabold">Ankit Prasad</h4>
                <p className="text-gray-500 font-bold text-sm">Founder &amp; CEO, ADREN Travel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Pricing for Every Scale</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Flexible plans designed for independent agents to global travel enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="p-10 rounded-[2rem] bg-[#f8fafc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:translate-y-[-4px]">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">For independent agents.</p>
              <div className="mb-8">
                <span className="text-5xl font-black">$29</span>
                <span className="text-gray-400 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["AI-assisted search", "Basic CRM", "5 itineraries/mo"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-green-500 !text-xl">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Start Trial
              </button>
            </div>

            {/* Professional */}
            <div className="p-10 rounded-[2rem] vibgyor-gradient-border shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 vibgyor-bg text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">For growing agencies.</p>
              <div className="mb-8">
                <span className="text-5xl font-black">$59</span>
                <span className="text-gray-400 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Full AI Builder", "Unlimited itineraries", "Multi-supplier mapping", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-green-500 !text-xl">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary text-white text-sm font-black uppercase tracking-widest hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                Go Professional
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-10 rounded-[2rem] bg-[#f8fafc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:translate-y-[-4px]">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">For global wholesalers.</p>
              <div className="mb-8">
                <span className="text-4xl font-black">Contact Sales</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["API Access", "Custom AI Training", "Dedicated Account Manager", "White-labeling"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-green-500 !text-xl">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-[#111418] dark:bg-white dark:text-black text-white text-sm font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-[#1a6ab3] p-12 md:p-20 text-center text-white relative overflow-hidden saas-shadow">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Build the Future of <br />Travel with ADREN
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Join the exclusive group of early adopters and transform your travel business with AI-powered operations.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-transform text-center">
                Get Started Today
              </Link>
              <Link to="/contact" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-colors text-center">
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
