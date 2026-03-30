import { Link } from "react-router-dom";

const verticals = [
  {
    icon: "hotel",
    title: "Hotels",
    desc: "Access over 1.5 million properties globally, from luxury resorts to local boutique stays, all normalized for easy booking.",
    features: ["Real-time Availability", "AI-Optimized Pricing", "Global Content Localization"],
    suppliers: ["TBO", "Stuba", "Hotelbeds", "Localims"],
  },
  {
    icon: "attractions",
    title: "Activities",
    desc: "Curated tours, tickets, and local experiences across every major destination worldwide.",
    features: ["Instant Confirmation", "Last-minute Inventory", "Mobile Voucher Support"],
    suppliers: ["HBActivities", "Localims"],
    reverse: true,
  },
  {
    icon: "airport_shuttle",
    title: "Transfers",
    desc: "Reliable airport pickups and private transfers with real-time driver tracking and fleet variety.",
    features: ["24/7 Driver Support", "Automated Dispatch", "Dynamic Price Engine"],
    suppliers: ["Transferz", "Localims"],
  },
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="material-symbols-outlined !text-sm">hub</span>
            B2B SUPPLY NETWORK
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            A Global Ecosystem of <br />
            <span className="vibgyor-text">Travel Supply</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 font-medium">
            Unlock instant access to the world's leading travel providers. Seamlessly integrate multi-vertical inventory into your platform via our AI-orchestrated unified API.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#ecosystem" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-extrabold saas-shadow hover:scale-105 transition-all text-center">
              Explore Verticals
            </a>
            <a href="#" className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-extrabold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-all text-center">
              API Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30" id="ecosystem">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {verticals.map((v, idx) => (
              <div key={v.title}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${v.reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined vibgyor-icon !text-4xl">{v.icon}</span>
                      <h3 className="text-3xl font-extrabold">{v.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">{v.desc}</p>
                    <ul className="space-y-4">
                      {v.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 font-semibold text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-green-500">check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {v.suppliers.map((s) => (
                      <div key={s} className="supplier-logo-container">
                        <span className="font-bold text-gray-400 uppercase tracking-widest">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {idx < verticals.length - 1 && <div className="h-px bg-gray-200 dark:bg-gray-800 mt-16"></div>}
              </div>
            ))}

            <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

            {/* Cruise & Flights side by side */}
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined vibgyor-icon !text-4xl">directions_boat</span>
                  <h3 className="text-2xl font-extrabold">Cruise</h3>
                </div>
                <div className="supplier-logo-container w-full h-32 mb-6">
                  <span className="font-bold text-gray-400 uppercase tracking-widest">Widgety</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-green-500 !text-lg">check_circle</span> Cabin-level Availability
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-green-500 !text-lg">check_circle</span> Full Itinerary Data
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined vibgyor-icon !text-4xl">flight_takeoff</span>
                  <h3 className="text-2xl font-extrabold">Transport (Flights)</h3>
                </div>
                <div className="supplier-logo-container w-full h-32 mb-6">
                  <span className="font-bold text-gray-400 uppercase tracking-widest">Mystifly</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-green-500 !text-lg">check_circle</span> Global NDC Content
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-green-500 !text-lg">check_circle</span> Automated Ticketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified API */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="api-block-gradient rounded-[3rem] p-12 md:p-20 text-white saas-shadow relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">One Unified API for All Supplies</h2>
                <p className="text-lg text-white/70 mb-8">Stop managing multiple vendor connections. ADREN unifies every supplier into a single, high-performance endpoint, handles normalization, and provides intelligent routing.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary">data_object</span>
                    <div>
                      <h4 className="font-bold">JSON Standardization</h4>
                      <p className="text-sm text-white/60">Uniform data models across all verticals.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary">speed</span>
                    <div>
                      <h4 className="font-bold">&lt; 200ms Response Time</h4>
                      <p className="text-sm text-white/60">Edge-optimized global delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm border border-white/5 backdrop-blur-sm saas-shadow">
                <div className="flex gap-2 mb-4">
                  <div className="size-3 rounded-full bg-red-500/50"></div>
                  <div className="size-3 rounded-full bg-yellow-500/50"></div>
                  <div className="size-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-blue-400">GET</div>
                <div className="text-white">/v1/search?vertical=hotels&amp;location=LHR</div>
                <div className="text-gray-500 mt-4">{"// Aggregating supply from 12 providers..."}</div>
                <div className="text-green-400 mt-2">{"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-400">"status"</span>: <span className="text-green-300">"success"</span>,<br />
                  <span className="text-purple-400">"results"</span>: [ ... ],<br />
                  <span className="text-purple-400">"optimized_by"</span>: <span className="text-green-300">"ADREN-AI"</span>
                </div>
                <div className="text-green-400">{"}"}</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          </div>
        </div>
      </section>

      {/* Integration Perks */}
      <section className="py-24 px-6 bg-[#f8fafc] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Integration Perks</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Enterprise-grade reliability built into every connection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "build_circle", title: "Zero Maintenance", desc: "We handle API updates, schema changes, and vendor outages so your dev team can focus on product." },
              { icon: "trending_up", title: "Instant Scaling", desc: "Go from 100 to 1,000,000 requests overnight. Our infrastructure scales horizontally with your growth." },
              { icon: "verified_user", title: "High Booking Success", desc: "Advanced caching and pre-booking validation ensures industry-leading conversion rates." },
            ].map((perk) => (
              <div key={perk.title} className="bg-white dark:bg-gray-800 p-10 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700 text-center">
                <div className="size-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined vibgyor-icon !text-4xl">{perk.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-[#1a6ab3] p-12 md:p-20 text-center text-white relative overflow-hidden saas-shadow">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Start Integrating Today</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Join the world's most advanced travel technology network and supercharge your booking experience.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-transform">
                View API Docs
              </button>
              <Link to="/contact" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-colors text-center">
                Contact Sales
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
