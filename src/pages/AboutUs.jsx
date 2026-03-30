import { Link } from "react-router-dom";

const team = [
  {
    name: "Divyesh Dighe",
    role: "Product Delivery Manager",
    desc: "Leads end-to-end delivery of travel solutions, ensuring seamless integration across suppliers, booking systems, and distribution channels with 15+ years in global B2B travel",
    img: "src/assets/divyesh_dighe.png",
  },
  {
    name: "Aditya Swarankar",
    role: "Chief Business Officer",
    desc: "Drives strategic partnerships and revenue growth by expanding travel supplier networks, optimizing distribution channels, and scaling global travel operations.",
    img: "src/assets/Aditya_Swarankar_CBO.jpg"
  },
  {
    name: "Karnavi Joshi",
    role: "UI/UX Lead",
    desc: "Designs intuitive travel booking experiences focused on seamless user journeys, improving conversion rates across flight, hotel, and package booking platforms.",
    img: "src/assets/karnavi_joshi.jpg",
  },
  {
    name: "Ankush Prasad",
    role: "HR Manager",
    desc: "Builds high-performing teams in the travel domain, specializing in talent acquisition, workforce scaling, and organizational development for travel operations.",
    img: "src/assets/Ankush_Prasad.png",
  },
];

const adrenValues = [
  { letter: "A", name: "Adventure", borderColor: "border-red-500", textColor: "text-red-500", desc: "Exploring new horizons in travel tech. We embrace the unknown to build what hasn't been built before." },
  { letter: "D", name: "Drift", borderColor: "border-orange-500", textColor: "text-orange-500", desc: "Moving seamlessly through global supply. Effortless adaptation to market shifts and inventory flows." },
  { letter: "R", name: "Roam", borderColor: "border-green-500", textColor: "text-green-500", desc: "Enabling global reach for every agent. No borders, no limits, just worldwide possibilities at your fingertips." },
  { letter: "E", name: "Enjoy", borderColor: "border-blue-500", textColor: "text-blue-500", desc: "Creating effortless booking experiences. Technology should delight the user and simplify the complex." },
  { letter: "N", name: "Nest", borderColor: "border-indigo-500", textColor: "text-indigo-500", desc: "Providing a secure, reliable platform for growth. A stable foundation where your business can thrive." },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-bold tracking-[0.2em] uppercase mb-6 text-sm">The B2B AI Infrastructure</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            ADREN — <span className="vibgyor-text">Adventure. Drift. Roam. Enjoy Your Nest.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Architecting the future of travel commerce through intelligent AI infrastructure and seamless global supply connectivity.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white font-bold h-12 px-8 rounded-lg shadow-lg shadow-primary/20">Our Journey</button>
            <Link to="/solutions" className="border border-gray-200 dark:border-gray-700 font-bold h-12 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* The ADREN Story */}
      <section className="py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold sticky top-32">The ADREN <br /><span className="text-primary">Genesis</span></h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Founded at the intersection of travel and technology, ADREN was born from a simple mission: to empower travel businesses with the same AI-driven infrastructure that fuels global tech giants.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                We recognized a widening gap in the B2B landscape. While consumer travel apps became slicker and smarter, the backend systems—the very backbone of the industry—remained fragmented and manual.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                ADREN is the bridge. We are moving from traditional, friction-heavy models to a seamless, automated future where every travel agent and corporate partner can scale infinitely through intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our DNA: The A.D.R.E.N. Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-400">Five pillars that define how we build, think, and evolve.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {adrenValues.map((v) => (
              <div key={v.letter} className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border-t-4 ${v.borderColor} hover:-translate-y-2 transition-transform`}>
                <span className={`text-4xl font-black ${v.textColor} mb-6 block`}>{v.letter}</span>
                <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-2xl bg-primary text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined !text-9xl">visibility</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Our Vision</p>
            <h2 className="text-4xl font-bold mb-6">To become the global AI backbone for B2B travel commerce.</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              We envision a world where every travel transaction is optimized by intelligence, ensuring maximum value for agents and unforgettable experiences for travelers.
            </p>
          </div>
          <div className="p-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col justify-center relative shadow-xl">
            <div className="absolute top-0 right-0 p-8 text-primary opacity-10">
              <span className="material-symbols-outlined !text-9xl">rocket_launch</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-primary">Our Mission</p>
            <h2 className="text-4xl font-bold mb-6 text-[#111418] dark:text-white">To empower travel businesses through intelligent automation.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our goal is to democratize high-end AI infrastructure, allowing businesses of all sizes to compete at a global scale with enterprise-grade tools.
            </p>
          </div>
        </div>
      </section>

      {/* ADREN DNA */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark/30">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-black mb-16">The ADREN DNA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {[
              { icon: "terminal", color: "primary", title: "Engineering Excellence", desc: "Code is our craft. We build robust, scalable systems that handle millions of requests with precision and speed." },
              { icon: "diversity_3", color: "purple-600", title: "Radical Transparency", desc: "Open communication and data-driven decisions are at the heart of our culture and our client partnerships." },
              { icon: "eco", color: "green-600", title: "Sustainable Innovation", desc: "We don't just build for today; we engineer solutions that evolve and sustain the travel ecosystem for the future." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center px-4">
                <div className={`size-20 bg-${item.color}/10 text-${item.color} rounded-full flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined !text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">Led by Visionaries</h2>
              <p className="text-gray-600 dark:text-gray-400">A collective of travel industry veterans, AI researchers, and engineering leaders committed to transformation.</p>
            </div>
            <Link to="/careers" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Join our team <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-white cursor-pointer">link</span>
                      <span className="material-symbols-outlined text-white cursor-pointer">mail</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-background-dark dark:bg-gray-900 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full vibgyor-border-top opacity-30"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Ready to build the future of travel?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">Join the ADREN ecosystem and transform your B2B commerce with the power of intelligent AI infrastructure.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="bg-primary text-white font-bold h-14 px-10 rounded-xl text-lg hover:scale-105 transition-transform flex items-center justify-center">
              Get Started Today
            </Link>
            <Link to="/contact" className="bg-white/10 text-white font-bold h-14 px-10 rounded-xl text-lg hover:bg-white/20 transition-colors flex items-center justify-center">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
