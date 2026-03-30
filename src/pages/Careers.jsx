import { Link } from "react-router-dom";

const values = [
  { icon: "lightbulb", title: "Innovation First", desc: "We push boundaries to redefine what's possible in travel technology." },
  { icon: "diversity_3", title: "Impact Driven", desc: "Every line of code we write creates real-world impact for travel businesses." },
  { icon: "emoji_objects", title: "Ownership Mindset", desc: "We think like founders. Everyone owns their work end-to-end." },
];

const roles = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "India / Remote", type: "Full-time", tags: ["React", "TypeScript", "Tailwind CSS"] },
  { title: "AI Research Scientist", dept: "AI & ML", location: "India / Remote", type: "Full-time", tags: ["Python", "LLMs", "NLP"] },
  { title: "Head of Global Partnerships", dept: "Business", location: "Australia / Remote", type: "Full-time", tags: ["B2B Sales", "Travel Industry", "API Platforms"] },
  { title: "Customer Success Manager", dept: "Customer Success", location: "Australia / Remote", type: "Full-time", tags: ["SaaS", "Onboarding", "Account Management"] },
];

const perks = [
  { icon: "flight_takeoff", label: "Travel Perks" },
  { icon: "health_and_safety", label: "Health & Wellness" },
  { icon: "laptop_mac", label: "Latest Tech" },
  { icon: "school", label: "Learning Budget" },
  { icon: "diversity_2", label: "Team Retreats" },
  { icon: "schedule", label: "Flexible Hours" },
];

const gallery = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="vibgyor-btn text-xs font-bold uppercase tracking-widest mb-8 inline-block">
            <span className="material-symbols-outlined !text-sm mr-1">work</span> WE ARE HIRING
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Build the Future of <br />
            <span className="vibgyor-text">Travel Technology</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 font-medium">
            Join a team of passionate engineers, designers, and business minds shaping the next generation of AI-powered travel infrastructure.
          </p>
          <a href="#roles" className="bg-primary text-white px-10 py-5 rounded-2xl text-xl font-extrabold saas-shadow hover:scale-105 transition-transform inline-block">
            View Open Roles
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Culture & Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We hire people who thrive in fast-paced, mission-driven environments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white dark:bg-gray-800 p-10 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-1 transition-transform">
                <div className="size-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined vibgyor-icon !text-4xl">{v.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6" id="roles">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Open Roles</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Find your perfect role and help us transform the global travel industry.</p>
          </div>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.title} className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl saas-shadow border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/30 transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined !text-base">apartment</span> {role.dept}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined !text-base">location_on</span> {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined !text-base">schedule</span> {role.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {role.tags.map((tag) => (
                      <span key={tag} className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <button className="vibgyor-btn text-sm font-bold shrink-0">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Perks &amp; Benefits</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We take care of our team, so they can take care of building great products.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {perks.map((p) => (
              <div key={p.label} className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined vibgyor-icon !text-3xl mb-3 block">{p.icon}</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at ADREN - Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Life at ADREN</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A glimpse into our world of innovation, collaboration, and fun.</p>
          </div>
          <div className="masonry">
            {gallery.map((src, i) => (
              <div key={i} className="masonry-item">
                <img
                  src={src}
                  alt={`Life at ADREN ${i + 1}`}
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-[#1a6ab3] p-12 md:p-20 text-center text-white relative overflow-hidden saas-shadow">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Don't See Your Role?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">We're always looking for exceptional talent. Send us your resume and let's start a conversation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:careers@adren.travel" className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-transform text-center">
                Send Your Resume
              </a>
              <Link to="/contact" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-colors text-center">
                Get in Touch
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
