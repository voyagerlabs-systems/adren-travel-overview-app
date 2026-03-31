import { useState } from "react";

const offices = [
  { city: "Vadodara", country: "India", icon: "apartment" },
];

const socials = [
  { label: "LinkedIn", icon: "M20.95,4H3.05A1.05,1.05,0,0,0,2,5.05V20.95A1.05,1.05,0,0,0,3.05,22H20.95A1.05,1.05,0,0,0,22,20.95V5.05A1.05,1.05,0,0,0,20.95,4ZM8.5,19H5.5V10H8.5ZM7,8.73A1.77,1.77,0,1,1,8.77,6.96,1.77,1.77,0,0,1,7,8.73ZM19,19H16V14.5c0-1.12,0-2.56-1.56-2.56S12.5,13.12,12.5,14.5V19H9.5V10h2.88v1.23h0A3.16,3.16,0,0,1,15.24,9.8C18.27,9.8,19,11.77,19,14.31Z", url: "https://www.linkedin.com/company/adren-travel/" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          reason: form.reason,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", company: "", reason: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="material-symbols-outlined !text-sm">mail</span>
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
            Let's Start a <span className="vibgyor-text">Conversation</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium">
            Whether you're ready to integrate or just exploring, our team is here to help you find the right solution.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Company Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Enter your company"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Reason for Contact</label>
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none"
                  >
                    <option value="">Select a reason</option>
                    <option value="demo">Request a Demo</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl text-lg font-extrabold hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Global Offices */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">public</span> Global Offices
              </h3>
              <div className="space-y-5">
                {offices.map((o) => (
                  <div key={o.city} className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary !text-xl">{o.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{o.city}</h4>
                      <p className="text-xs text-gray-500">{o.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_mail</span> Direct Contact
              </h3>
              <div className="space-y-4">
                <a href="mailto:divyesh.dighe@adrentravel.com" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-lg">storefront</span> divyesh.dighe@adrentravel.com 
                </a>
                <a href="mailto:aditya.swarankar@adrentravel.com" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined !text-lg">support_agent</span> aditya.swarankar@adrentravel.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl saas-shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">share</span> Follow Us
              </h3>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" aria-label={s.label} className="size-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <svg className="size-5 fill-gray-600 dark:fill-gray-300" viewBox="0 0 24 24">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary p-12 md:p-20 text-center text-white relative overflow-hidden saas-shadow">
          <div className="relative z-10">
            <span className="material-symbols-outlined !text-5xl mb-6 block">video_camera_front</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Book a Live Demo</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">See ADREN's AI Travel Platform in action. Our team will walk you through the platform, answer questions, and help you evaluate the best integration path.</p>
            <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-transform">
              Schedule a Demo
            </button>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Floating AI Chat Widget */}
      {/* <button
        aria-label="AI Chat"
        className="fixed bottom-8 right-8 size-16 rounded-full vibgyor-gradient text-white flex items-center justify-center saas-shadow hover:scale-110 transition-transform z-50"
      >
        <span className="material-symbols-outlined !text-3xl">smart_toy</span>
      </button> */}
    </>
  );
}
