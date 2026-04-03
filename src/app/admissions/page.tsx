import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-40">
            <img 
              alt="University Campus architecture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbRR64x9X7RkMT_9ErP42CCS4OuYbhwIiNfjbbss7iH9XkYN94Gz9_c0zwZCNoB3bJapmuP2egfmrvebAvgwnSlNAuPg9Fm5ecd2OzxDlaVJ-Z3cyEvzD86-D3TGnQ_P1fpuf2LjwaXSAoDSOfrS6m5W45Jq5WDbRxp4wHd-vTU0kWHnfKmnRHGgqfqOZTauGEhGO2Ht188VDY-YlG-TW7r-j6Qx-Nudn04VLFlM2wF23VOw8k43XesiuSCzk_mvFpt0rEYgDf" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="relative max-w-screen-2xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-black text-xs tracking-widest uppercase mb-6 shadow-lg">
                Admissions Open 2024
              </span>
              <h1 className="text-white font-headline font-extrabold text-6xl md:text-8xl leading-[1.0] tracking-tighter mb-8">
                Join the Namal <br /><span className="text-secondary-container">Community</span>
              </h1>
              <p className="text-emerald-50 text-xl leading-relaxed mb-10 opacity-90 max-w-lg font-medium">
                Step into a world-class center of excellence. We curate a learning environment that empowers the next generation of leaders and innovators.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="primary-cta-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-extrabold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Start Application
                </button>
                <button className="text-white font-headline font-extrabold text-lg flex items-center gap-2 group hover:translate-x-2 transition-transform">
                  View Prospectus <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process: The Academic Timeline */}
        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-4 lg:col-span-4">
                <h2 className="font-headline font-black text-5xl text-primary tracking-tighter mb-8 leading-tight text-balance">Your Journey Begins Here</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-medium">
                  Our streamlined application process is designed to identify passion, potential, and intellectual curiosity. Follow these four steps to secure your future.
                </p>
                <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-6">help_outline</span>
                  <h4 className="font-headline font-black text-2xl text-primary mb-3">Need Guidance?</h4>
                  <p className="text-on-surface-variant text-sm mb-8 font-medium leading-relaxed">Our admissions counselors are available Monday-Friday to help you with your application query.</p>
                  <button className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">Book a Consultation</button>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-8">
                <div className="relative pl-12">
                  <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-secondary opacity-10"></div>
                  
                  {[
                    {
                      num: "01",
                      title: "Choose Program",
                      desc: "Explore our diverse range of undergraduate and graduate programs in Engineering, Computer Science, and Business. Match your passion with our curriculum.",
                      tags: ["BSc Engineering", "Computer Science"]
                    },
                    {
                      num: "02",
                      title: "Submit Documents",
                      desc: "Upload your academic transcripts, national identity documents, and personal statement through our digital portal. No physical mailing required.",
                      icon: "attachment",
                      link: "Document Checklist"
                    },
                    {
                      num: "03",
                      title: "Aptitude Test",
                      desc: "Shortlisted candidates will be invited to sit for our comprehensive aptitude test, evaluating analytical thinking and core subject proficiency.",
                      action: "Sample Papers",
                      active: true
                    },
                    {
                      num: "04",
                      title: "Interview",
                      desc: "The final stage involves a personal interaction with our faculty panel to understand your aspirations and alignment with Namal's core values."
                    }
                  ].map((step) => (
                    <div key={step.num} className="relative mb-16 last:mb-0">
                      <div className={`absolute -left-[30px] w-4 h-4 rounded-full ${step.active ? 'bg-secondary ring-4 ring-secondary/20' : 'bg-outline-variant'}`}></div>
                      <div className={`bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/10 group transition-all hover:scale-[1.02] ${step.active ? 'border-secondary/20' : ''}`}>
                        <span className="font-headline font-black text-secondary/10 text-7xl absolute right-8 top-4 select-none group-hover:text-secondary/20 transition-colors uppercase italic">{step.num}</span>
                        <h3 className="font-headline font-black text-3xl text-primary mb-4 leading-tight">{step.title}</h3>
                        <p className="text-on-surface-variant leading-relaxed max-w-xl font-medium">
                          {step.desc}
                        </p>
                        {step.tags && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {step.tags.map(tag => (
                              <span key={tag} className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-bold text-primary border border-outline-variant/5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {step.link && (
                          <div className="mt-8 flex items-center gap-3 text-xs text-secondary font-black uppercase tracking-widest cursor-pointer hover:underline">
                            <span className="material-symbols-outlined text-sm">{step.icon}</span> {step.link}
                          </div>
                        )}
                        {step.action && (
                          <div className="mt-8">
                            <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-secondary/10">
                              {step.action}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates: Calendar Grid */}
        <section className="py-24 bg-surface-container-low mb-24">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline font-black text-5xl text-primary tracking-tighter mb-4 leading-tight">Admissions Calendar</h2>
                <p className="text-on-surface-variant text-lg font-medium">Key dates for the Fall 2024 Admission cycle.</p>
              </div>
              <button className="bg-white text-primary font-black uppercase text-xs tracking-widest flex items-center gap-3 px-8 py-4 rounded-xl shadow-lg border border-outline-variant/10 hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-sm">event</span> Add to Calendar
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { date: "15", month: "May 2024", title: "Portal Opens", desc: "Online applications go live at midnight PST." },
                { date: "30", month: "June 2024", title: "Submission Deadline", desc: "Final call for documents and fees.", highlight: true },
                { date: "12", month: "July 2024", title: "Aptitude Test", desc: "Conducted at multiple centers across Pakistan." },
                { date: "05", month: "Aug 2024", title: "Orientation", desc: "Welcome week for the Batch of 2028." }
              ].map((cal) => (
                <div key={cal.date} className={`bg-white p-1 rounded-[2rem] shadow-xl shadow-primary/5 group ${cal.highlight ? 'ring-2 ring-secondary' : 'border border-outline-variant/10'}`}>
                  <div className="bg-surface-container-lowest p-10 rounded-[1.8rem] flex flex-col items-center text-center h-full hover:bg-primary/5 transition-colors duration-500">
                    <span className="text-secondary font-headline font-black text-6xl tracking-tighter mb-2 group-hover:scale-110 transition-transform">{cal.date}</span>
                    <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60 underline underline-offset-8 decoration-secondary/30">{cal.month}</span>
                    <h4 className="font-headline font-black text-2xl text-primary mb-4 leading-tight">{cal.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-auto italic font-medium leading-relaxed opacity-80">{cal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Area */}
        <section className="py-24 bg-surface mb-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="relative rounded-[3rem] overflow-hidden primary-cta-gradient p-16 md:p-32 text-center shadow-2xl shadow-primary/30">
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                <img 
                  alt="Student Success celebration" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepA3fJMyxubcT7wsPQAq-9y_0qlgw0OsODuQ7D-zZi5K-iSXnVwVHtWhJE3louNjfoGYorm2rbDR2r3kNFqxLBgjkVzcjYJbZqzsULyTR6XvANSjnp6VrtwliyyQEqvI5FuN3qpVc8ge271hCOz0oHoaie62aioISFbx5pkZOcnp0qMLVNlytDrMAQbHTOiwF3e5tQJxwJTS4cdPrfc3wNQ2AzfIlbkzizSe1U0_8wt_fru9D_qxn2kTLQdbRG7NHSbZBq_AO" 
                />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-headline font-black text-6xl md:text-8xl text-white tracking-tighter mb-10 leading-[0.9]">Ready to shape <br /> your future?</h2>
                <p className="text-emerald-50 text-2xl mb-16 opacity-90 leading-relaxed font-light max-w-2xl mx-auto text-balance">
                  Don{"'"}t miss the opportunity to be part of a community that values knowledge, character, and social impact.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <button className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-2xl font-headline font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all min-w-[280px]">
                    Apply Now
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-headline font-black text-xl hover:bg-white/20 transition-all min-w-[280px]">
                    Financial Aid Info
                  </button>
                </div>
                <p className="text-emerald-100 text-xs mt-16 opacity-40 font-black uppercase tracking-[0.3em]">
                  Admission application fee: PKR 2,000 (Non-refundable)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
