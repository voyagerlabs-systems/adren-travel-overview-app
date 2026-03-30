import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            Solutions for Success
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            Tailored AI Solutions for Every <span className="vibgyor-text">Travel Business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Empower your operations with enterprise-grade AI tools designed to scale your travel business globally. Efficiency, connectivity, and growth in one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden">
              <span className="relative z-10">Book a Live Demo</span>
              <div className="absolute inset-0 vibgyor-gradient opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
            <Link to="/products" className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold rounded-lg hover:shadow-lg transition-all">
              View Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* Segmented Solutions */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Travel Agencies */}
          <div className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">real_estate_agent</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Travel Agencies</h3>
            <p className="text-primary font-bold text-lg mb-6">Sell Faster and Smarter</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {["AI Itinerary Builder", "Multi-supplier Search", "Productivity Automation"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">
              Explore Agency Tools
            </button>
          </div>

          {/* Tour Operators */}
          <div className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="size-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">tour</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Tour Operators</h3>
            <p className="text-indigo-600 font-bold text-lg mb-6">Scale Your Distribution</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Inventory Management", "Local Packages Marketplace", "Branded Client Proposals"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
              View Operator Suite
            </button>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col p-8 bg-white dark:bg-gray-900 rounded-xl border-2 border-primary/20 shadow-md hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Enterprise</div>
            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Enterprise &amp; Wholesalers</h3>
            <p className="text-primary font-bold text-lg mb-6">Power Global Commerce</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Global Hotels API", "White-label Engines", "Robust Sub-agent Management"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:brightness-110 transition-all text-center block">
              Contact Enterprise Team
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dives */}
      <section className="py-20 bg-white dark:bg-[#151a26]">
        <div className="max-w-[1280px] mx-auto px-6 space-y-32">
          {/* AI Search */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight">AI Search &amp; Pricing Engine</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our proprietary logic finds the best rates across hundreds of global suppliers in milliseconds. We use Natural Language Processing to understand complex traveler needs and dynamic pricing to adjust margins in real-time based on demand.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-background-light dark:bg-gray-800 rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-2">bolt</span>
                  <h4 className="font-bold">Smart Filtering</h4>
                  <p className="text-xs text-gray-500">NLP driven intent matching.</p>
                </div>
                <div className="p-4 bg-background-light dark:bg-gray-800 rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-2">trending_up</span>
                  <h4 className="font-bold">Dynamic Pricing</h4>
                  <p className="text-xs text-gray-500">Real-time margin optimization.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-inner border border-gray-200 dark:border-gray-700 relative">
                <img
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJcapYBi0MsBOry5Zc7G2v25X8EWI29oWTFVEN09dPyhgoY8iTVQhF7VUswHU9FeP5R96kz-gyF0IJvkVaU9TUHYibQI2d6fDOT6Ca2T38L8Yn24tXqdvAUoKezPtb8OekWnmRjWZ-5Q3RV5QazuNGoq1U-Xe4upNxUh7SpE94OyEMh1OzJ1jjSyKxey8a5dzKyy05aWqZJPbOyemQUURdnUU3PqScisJfwFcwO7yfswYSRH65q2qWtbkojRulEqofA_qigbH7mxw"
                  alt="AI data visualization"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Global Supply */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight">Global Supply Aggregation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Access a vast ecosystem of travel content with a single integration. We've partnered with the world's leading suppliers to give you unbeatable inventory across every category.
              </p>
              <div className="flex flex-wrap gap-6 pt-4 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {["Hotelbeds", "Mystifly", "Widgety", "Tbo", "Transferz"].map((p) => (
                  <div key={p} className="font-bold text-2xl text-gray-400">{p}</div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 gap-4">
                {["Hotelbeds", "Mystifly", "Widgety"].map((logo, i) => (
                  <div key={logo} className={`aspect-square ${["bg-blue-50 dark:bg-blue-900/20", "bg-indigo-50 dark:bg-indigo-900/20", "bg-red-50 dark:bg-red-900/20"][i]} rounded-xl p-4 flex items-center justify-center`}>
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">{logo}</span>
                  </div>
                ))}
                <div className="col-span-3 aspect-[3/1] bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-500">Strategic Partners Expanding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial OS */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight">Financial OS</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                A robust financial backend designed for the complexities of travel. Manage sub-agent wallets, handle multi-currency transactions, and automate complex invoicing with zero manual effort.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: "account_balance_wallet", label: "Real-time Wallet Management" },
                  { icon: "currency_exchange", label: "Multi-currency Settlement" },
                  { icon: "receipt_long", label: "Automated Invoicing & Reconciliation" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold">Revenue Insights</h4>
                  <span className="text-green-500 font-bold text-sm">+24% vs last month</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-300 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <h2 className="text-3xl font-black text-center mb-16">Core Travel Verticals</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: "hotel", label: "Hotels", stat: "1.2M+ Properties" },
            { icon: "flight", label: "Flights", stat: "700+ Airlines • Coming Soon" },
            { icon: "directions_boat", label: "Cruises", stat: "30 Global Lines • Coming Soon" },
            { icon: "local_activity", label: "Activities", stat: "200k+ Experiences • Coming Soon" },
            { icon: "directions_car", label: "Transfers", stat: "Global Connectivity • Coming Soon" },
          ].map((v) => (
            <div key={v.label} className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-center group hover:border-primary transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">{v.icon}</span>
              <h4 className="font-bold text-sm uppercase tracking-wide">{v.label}</h4>
              <p className="text-xs text-gray-500 mt-2">{v.stat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">Success Stories</h2>
              <p className="text-gray-600 dark:text-gray-400">See how travel leaders are transforming their business with ADREN AI.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-all">
              <div className="text-6xl font-black text-primary mb-6">30%</div>
              <p className="text-xl font-bold mb-4">Increase in Agent Productivity</p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">"The AI Itinerary builder reduced our manual work by 12 hours a week per agent, allowing us to focus on high-ticket sales."</p>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">— Global Nomad Agencies</span>
            </div>
            <div className="group relative bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-all">
              <div className="text-4xl font-black text-primary mb-6">Expanding Sub-agent Ecosystem</div>
              <p className="text-xl font-bold mb-4">New Sub-agent Partners</p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">"Since migrating to the ADREN Global API, we've onboarded agents in 12 new countries with zero technical overhead."</p>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">— Vertex Wholesale</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Ready to transform your travel business?</h2>
          <p className="text-xl text-blue-100 mb-10 relative z-10 max-w-2xl mx-auto">
            Join the 500+ travel businesses already scaling with ADREN. Book your personalized platform tour today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-black hover:scale-105 transition-all shadow-xl">
              Get Started Now
            </Link>
            <Link to="/contact" className="bg-primary/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-black hover:bg-white/10 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
